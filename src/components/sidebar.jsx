import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Typography,
    Button,
    Avatar,
    Stack,
    Card,
    CardContent,
    Select,
    MenuItem,
    FormControl,
    ListItemAvatar,
    IconButton,
    Badge,
  } from "@mui/material"
  import {
    Home as HomeIcon,
    BarChart as BarChartIcon,
    People as PeopleIcon,
    Description as DescriptionIcon,
    Settings as SettingsIcon,
    Info as InfoIcon,
    Help as HelpIcon,
    MoreVert as MoreVertIcon,
    DeviceHub as DeviceHubIcon,
    AutoAwesome as AutoAwesomeIcon,
  } from "@mui/icons-material"
  
  const drawerWidth = 240
  
  export default function Sidebar({ open, onClose }) {
    return (
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <FormControl fullWidth variant="outlined" size="small">
            <Select
              displayEmpty
              value="sitemark"
              renderValue={() => (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ListItemAvatar sx={{ minWidth: 36 }}>
                    <Avatar sx={{ width: 28, height: 28, bgcolor: "primary.main" }}>
                      <DeviceHubIcon fontSize="small" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sitemark-web"
                    secondary="Web app"
                    primaryTypographyProps={{ variant: "body2" }}
                    secondaryTypographyProps={{ variant: "caption" }}
                  />
                </Box>
              )}
            >
              <MenuItem value="sitemark">Sitemark-web</MenuItem>
              <MenuItem value="client-portal">Client Portal</MenuItem>
              <MenuItem value="admin-panel">Admin Panel</MenuItem>
            </Select>
          </FormControl>
        </Box>
  
        <Divider />
  
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box sx={{ flexGrow: 1, p: 2 }}>
            <List dense disablePadding>
              <ListItem disablePadding>
                <ListItemButton selected>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Analytics" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Clients" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tasks" />
                </ListItemButton>
              </ListItem>
            </List>
  
            <List dense disablePadding sx={{ mt: 2 }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Feedback" />
                </ListItemButton>
              </ListItem>
            </List>
  
            <Card variant="outlined" sx={{ mt: 2 }}>
              <CardContent>
                <AutoAwesomeIcon color="primary" fontSize="small" sx={{ mb: 1 }} />
                <Typography variant="body1" gutterBottom>
                  Plan about to expire
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  Enjoy 10% off when renewing your plan today.
                </Typography>
                <Button variant="contained" size="small" fullWidth>
                  Get the discount
                </Button>
              </CardContent>
            </Card>
          </Box>
  
          <Stack direction="row" alignItems="center" spacing={1} sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
            <Avatar src="/placeholder.svg?height=40&width=40" alt="Riley Carter" />
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography variant="body2" noWrap>
                Riley Carter
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block" noWrap>
                riley@email.com
              </Typography>
            </Box>
            <Badge color="error" variant="dot" invisible>
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Badge>
          </Stack>
        </Box>
      </Drawer>
    )
  }
  