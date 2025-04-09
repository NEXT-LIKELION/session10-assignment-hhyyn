"use client"

import { useState } from "react"
import { Box } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import Dashboard from "./components/dashboard"
import "./App.css"

function App() {
  const [mode, setMode] = useState("light")
  const [drawerOpen, setDrawerOpen] = useState(true)

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light")
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#121212",
        paper: mode === "light" ? "#fff" : "#1e1e1e",
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#fff" : "#1e1e1e",
            color: mode === "light" ? "#333" : "#fff",
            borderBottom: `1px solid ${mode === "light" ? "#e0e0e0" : "#333"}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === "light" ? "#fff" : "#1e1e1e",
            color: mode === "light" ? "#333" : "#fff",
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar open={drawerOpen} onClose={toggleDrawer} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerOpen ? 240 : 0}px)` },
            ml: { sm: `${drawerOpen ? 240 : 0}px` },
            transition: "margin 0.2s ease-in-out",
          }}
        >
          <Header onMenuClick={toggleDrawer} onThemeToggle={toggleTheme} currentTheme={mode} />
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
