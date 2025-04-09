import { Box, Paper, Typography, Stack, LinearProgress, Avatar } from "@mui/material"
import { Globe } from "lucide-react"

// Pie chart component
const PieChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let cumulativeAngle = 0

  return (
    <Box sx={{ width: 260, height: 260, position: "relative", mx: "auto" }}>
      <svg width="260" height="260" viewBox="0 0 260 260">
        <g transform="translate(130, 130)">
          {data.map((slice, index) => {
            const startAngle = cumulativeAngle
            const percentage = slice.value / total
            const angleSize = percentage * 360
            cumulativeAngle += angleSize

            const endAngle = cumulativeAngle

            // Convert angles to radians
            const startRad = ((startAngle - 90) * Math.PI) / 180
            const endRad = ((endAngle - 90) * Math.PI) / 180

            // Calculate coordinates
            const startX = Math.cos(startRad) * 100
            const startY = Math.sin(startRad) * 100
            const endX = Math.cos(endRad) * 100
            const endY = Math.sin(endRad) * 100

            // Create arc flag
            const largeArcFlag = angleSize > 180 ? 1 : 0

            // Generate SVG path
            const path = [`M 0,0`, `L ${startX},${startY}`, `A 100,100 0 ${largeArcFlag},1 ${endX},${endY}`, `Z`].join(
              " ",
            )

            return <path key={index} d={path} fill={slice.color} />
          })}
        </g>

        {/* Center text */}
        <text x="130" y="120" textAnchor="middle" fontWeight="bold" fontSize="20">
          98.5K
        </text>
        <text x="130" y="144" textAnchor="middle" fontSize="14" fill="#666">
          Total
        </text>
      </svg>
    </Box>
  )
}

export default function UsersByCountry() {
  const countryData = [
    {
      country: "India",
      percentage: 50,
      flag: <Avatar sx={{ width: 24, height: 24, bgcolor: "#FF9933" }}>IN</Avatar>,
      color: "#9e9e9e",
    },
    {
      country: "USA",
      percentage: 35,
      flag: <Avatar sx={{ width: 24, height: 24, bgcolor: "#3C3B6E" }}>US</Avatar>,
      color: "#616161",
    },
    {
      country: "Brazil",
      percentage: 10,
      flag: <Avatar sx={{ width: 24, height: 24, bgcolor: "#009c3b" }}>BR</Avatar>,
      color: "#424242",
    },
    {
      country: "Other",
      percentage: 5,
      flag: (
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            bgcolor: "#2196f3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Globe size={16} color="white" />
        </Box>
      ),
      color: "#212121",
    },
  ]

  const pieData = countryData.map((item) => ({
    value: item.percentage,
    color: item.color,
  }))

  return (
    <Paper variant="outlined" sx={{ height: "100%" }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Users by country
        </Typography>

        <PieChart data={pieData} />

        <Stack spacing={2} sx={{ mt: 2 }}>
          {countryData.map((country, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center">
              {country.flag}
              <Box sx={{ flexGrow: 1 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">{country.country}</Typography>
                  <Typography variant="body2">{country.percentage}%</Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={country.percentage}
                  color={index === 0 ? "primary" : index === 1 ? "secondary" : index === 2 ? "warning" : "info"}
                  sx={{ mt: 0.5, height: 4, borderRadius: 1 }}
                />
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Paper>
  )
}
