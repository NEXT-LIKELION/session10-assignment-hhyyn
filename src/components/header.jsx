"use client"

import { useState } from "react"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  InputBase,
  Breadcrumbs,
  Stack,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Dashboard as DashboardIcon,
  ChevronRight as ChevronRightIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material"

export default function Header({ onMenuClick, onThemeToggle, currentTheme }) {
  const [date] = useState("Apr 17, 2023")

  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: 1, bgcolor: "background.paper" }}>
      <Toolbar>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DashboardIcon sx={{ mr: 1 }} />
            <Typography variant="h5" component="h1">
              Dashboard
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={2} alignItems="center" display={{ xs: "none", md: "flex" }}>
          <Box sx={{ position: "relative" }}>
            <SearchIcon sx={{ position: "absolute", left: 10, top: 8, color: "text.secondary" }} />
            <InputBase
              placeholder="Search…"
              sx={{
                bgcolor: "action.hover",
                borderRadius: 1,
                pl: 4,
                py: 0.5,
                width: "160px",
                "&:focus-within": {
                  bgcolor: "background.paper",
                  boxShadow: 1,
                },
              }}
            />
          </Box>

          <Button variant="outlined" size="small" startIcon={<CalendarIcon />}>
            {date}
          </Button>

          <IconButton>
            <Badge color="error" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton onClick={onThemeToggle}>
            {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Stack>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={onMenuClick}
          sx={{ ml: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Box sx={{ px: 3, pb: 2, display: { xs: "none", sm: "block" } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Breadcrumbs separator={<ChevronRightIcon fontSize="small" />}>
            <Typography color="text.primary">Dashboard</Typography>
            <Typography color="text.secondary">Home</Typography>
          </Breadcrumbs>

          <Stack direction="row" spacing={2} alignItems="center" display={{ xs: "flex", md: "none" }}>
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
            <IconButton size="small">
              <Badge color="error" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="small" onClick={onThemeToggle}>
              {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </AppBar>
  )
}
