import { Grid, Paper, Typography, Box, Card, CardContent, Chip, Stack, Button } from "@mui/material"
import { ChevronRight, AutoGraph } from "@mui/icons-material"

// Simplified chart components
const LineChart = ({ color, data }) => {
  // This is a simplified visual representation
  const height = 50
  const width = 283
  const maxVal = Math.max(...data)
  const scale = height / maxVal

  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - val * scale
      return `${x},${y}`
    })
    .join(" ")

  return (
    <Box className="mini-chart">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id={`gradient-${color}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area */}
        <path d={`M0,${height} ${points} ${width},${height}Z`} fill={`url(#gradient-${color})`} />

        {/* Line */}
        <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" />
      </svg>
    </Box>
  )
}

const statsCards = [
  {
    title: "Users",
    value: "14k",
    change: "+25%",
    changeColor: "success",
    chartColor: "#4caf50",
    chartData: [7, 3, 8, 9, 7, 11, 3, 8, 9, 10, 11, 12, 11, 10, 9, 8, 10, 11, 12, 15, 18, 15, 13],
    period: "Last 30 days",
  },
  {
    title: "Conversions",
    value: "325",
    change: "-25%",
    changeColor: "error",
    chartColor: "#f44336",
    chartData: [18, 16, 14, 15, 14, 13, 12, 15, 13, 10, 13, 13, 13, 12, 13, 13, 13, 12, 10, 13, 11, 10, 9, 8, 7],
    period: "Last 30 days",
  },
  {
    title: "Event count",
    value: "200k",
    change: "+5%",
    changeColor: "default",
    chartColor: "#9e9e9e",
    chartData: [14, 12, 16, 16, 15, 17, 15, 15, 15, 19, 15, 15, 16, 17, 15, 16, 15, 13, 16, 15, 17, 15, 15, 14],
    period: "Last 30 days",
  },
]

export default function Overview() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>

      <Grid container spacing={2}>
        {statsCards.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} lg={3}>
            <Paper variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {card.title}
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="h4">{card.value}</Typography>
                      <Chip label={card.change} color={card.changeColor} size="small" />
                    </Stack>

                    <Typography variant="caption" color="text.secondary">
                      {card.period}
                    </Typography>
                  </Box>

                  <Box sx={{ flexGrow: 1 }}>
                    <LineChart color={card.chartColor} data={card.chartData} />
                  </Box>
                </Stack>
              </CardContent>
            </Paper>
          </Grid>
        ))}

        <Grid item xs={12} sm={6} lg={3}>
          <Card variant="elevation" elevation={0} sx={{ bgcolor: "background.default", height: "100%" }}>
            <CardContent>
              <AutoGraph />
              <Typography variant="subtitle2" sx={{ mt: 1 }}>
                Explore your data
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ my: 1 }}>
                Uncover performance and visitor insights with our data wizardry.
              </Typography>
              <Button variant="contained" size="small" endIcon={<ChevronRight />}>
                Get insights
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
