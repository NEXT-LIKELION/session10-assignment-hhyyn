"use client"

import { useState } from "react"
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  ListItemButton,
} from "@mui/material"
import { ChevronRight, ExpandMore } from "@mui/icons-material"

export default function ProductTree() {
  const [open, setOpen] = useState({
    website: true,
    blog: false,
    store: false,
  })

  const handleToggle = (key) => {
    setOpen({
      ...open,
      [key]: !open[key],
    })
  }

  // Item dot component
  const StatusDot = ({ color }) => (
    <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          bgcolor: color,
        }}
      />
    </Box>
  )

  return (
    <Paper variant="outlined" sx={{ height: "100%" }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Product tree
        </Typography>

        <List dense disablePadding>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToggle("website")} sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 24 }}>
                {open.website ? <ExpandMore fontSize="small" /> : <ChevronRight fontSize="small" />}
              </ListItemIcon>
              <ListItemText primary="Website" primaryTypographyProps={{ variant: "body2" }} />
            </ListItemButton>
          </ListItem>

          <Collapse in={open.website} timeout="auto" unmountOnExit>
            <List dense component="div" disablePadding sx={{ pl: 3 }}>
              <ListItem disablePadding>
                <ListItemButton selected sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <StatusDot color="success.main" />
                  </ListItemIcon>
                  <ListItemText primary="Home" primaryTypographyProps={{ variant: "body2" }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <StatusDot color="success.main" />
                  </ListItemIcon>
                  <ListItemText primary="Pricing" primaryTypographyProps={{ variant: "body2" }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <StatusDot color="success.main" />
                  </ListItemIcon>
                  <ListItemText primary="About us" primaryTypographyProps={{ variant: "body2" }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleToggle("blog")} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <ChevronRight fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Blog" primaryTypographyProps={{ variant: "body2" }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToggle("store")} sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 24 }}>
                {open.store ? <ExpandMore fontSize="small" /> : <ChevronRight fontSize="small" />}
              </ListItemIcon>
              <ListItemText primary="Store" primaryTypographyProps={{ variant: "body2" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 24 }}>
                <StatusDot color="primary.main" />
              </ListItemIcon>
              <ListItemText primary="Contact" primaryTypographyProps={{ variant: "body2" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 24 }}>
                <StatusDot color="primary.main" />
              </ListItemIcon>
              <ListItemText primary="Help" primaryTypographyProps={{ variant: "body2" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Paper>
  )
}
