"use client"

import { useState } from "react"
import {
  Box,
  Paper,
  Typography,
  Chip,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Checkbox,
} from "@mui/material"

// Sample data
const pagesData = [
  {
    id: 1,
    pageTitle: "Homepage Overview",
    status: "Online",
    users: 212423,
    eventCount: 8345,
    viewsPerUser: 18.5,
    averageTime: "2m 15s",
    conversionTrend: [3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 8, 7, 7, 7, 9, 9, 9, 11, 10, 9, 11, 14, 18, 18, 17, 14],
  },
  {
    id: 2,
    pageTitle: "Product Details - Gadgets",
    status: "Online",
    users: 172240,
    eventCount: 5653,
    viewsPerUser: 9.7,
    averageTime: "2m 30s",
    conversionTrend: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 11, 12],
  },
  {
    id: 3,
    pageTitle: "Checkout Process - Step 1",
    status: "Offline",
    users: 58240,
    eventCount: 3455,
    viewsPerUser: 15.2,
    averageTime: "2m 10s",
    conversionTrend: [
      2, 2, 3, 2, 3, 3, 4, 4, 4, 5, 6, 5, 8, 6, 7, 8, 8, 8, 9, 10, 10, 12, 11, 10, 12, 13, 15, 15, 15, 15,
    ],
  },
  {
    id: 4,
    pageTitle: "User Profile Dashboard",
    status: "Online",
    users: 96240,
    eventCount: 112543,
    viewsPerUser: 4.5,
    averageTime: "2m 40s",
    conversionTrend: [
      3, 3, 5, 5, 6, 6, 6, 6, 6, 9, 7, 6, 8, 8, 10, 10, 11, 11, 12, 13, 13, 15, 15, 13, 15, 15, 18, 19, 17, 17,
    ],
  },
  {
    id: 5,
    pageTitle: "Article Listing - Tech News",
    status: "Offline",
    users: 142240,
    eventCount: 3653,
    viewsPerUser: 3.1,
    averageTime: "2m 55s",
    conversionTrend: [
      3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 7, 6, 7, 7, 8, 8, 9, 9, 11, 11, 11, 13, 12, 11, 13, 14, 16, 17, 20, 20,
    ],
  },
]

// Mini bar chart component for the conversion column
const MiniBarChart = ({ data }) => {
  const maxVal = Math.max(...data)
  const height = 32
  const barWidth = 3.5
  const barGap = 0.8
  const totalBars = data.length
  const chartWidth = totalBars * (barWidth + barGap)

  return (
    <Box sx={{ width: 150, height: 32 }}>
      <svg width={150} height={height} viewBox={`0 0 ${chartWidth} ${height}`}>
        {data.map((value, index) => {
          const barHeight = value === 0 ? 0 : Math.max(3, (value / maxVal) * 25)
          const x = index * (barWidth + barGap)
          const y = height - barHeight

          return <rect key={index} x={x} y={y} width={barWidth} height={barHeight} fill="#2196f3" rx={1} />
        })}
      </svg>
    </Box>
  )
}

export default function PageData() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selected, setSelected] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (id) => selected.indexOf(id) !== -1

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = [...selected, id]
    } else {
      newSelected = selected.filter((item) => item !== id)
    }

    setSelected(newSelected)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = pagesData.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  return (
    <Paper variant="outlined" sx={{ height: "100%" }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Details
        </Typography>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < pagesData.length}
                    checked={pagesData.length > 0 && selected.length === pagesData.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell>Page Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Users</TableCell>
                <TableCell align="right">Event Count</TableCell>
                <TableCell align="right">Views per User</TableCell>
                <TableCell align="right">Average Time</TableCell>
                <TableCell>Daily Conversions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pagesData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                const isItemSelected = isSelected(row.id)

                return (
                  <TableRow
                    key={row.id}
                    hover
                    onClick={() => handleClick(row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isItemSelected} />
                    </TableCell>
                    <TableCell>{row.pageTitle}</TableCell>
                    <TableCell>
                      <Chip label={row.status} color={row.status === "Online" ? "success" : "default"} size="small" />
                    </TableCell>
                    <TableCell align="right">{row.users.toLocaleString()}</TableCell>
                    <TableCell align="right">{row.eventCount.toLocaleString()}</TableCell>
                    <TableCell align="right">{row.viewsPerUser}</TableCell>
                    <TableCell align="right">{row.averageTime}</TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" height="100%">
                        <MiniBarChart data={row.conversionTrend} />
                      </Stack>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={pagesData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </Box>
    </Paper>
  )
}
