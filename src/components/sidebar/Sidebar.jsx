import React from "react"
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import PeopleIcon from "@mui/icons-material/People"
import SettingsIcon from "@mui/icons-material/Settings"

const drawerWidth = 240

const Sidebar = () => {
  const itemsList = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      onClick: () => console.log("Dashboard clicked")
    },
    {
      text: "Users",
      icon: <PeopleIcon />,
      onClick: () => console.log("Users clicked")
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      onClick: () => console.log("Settings clicked")
    }
  ]

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" }
      }}
    >
      <Toolbar />
      <List>
        {itemsList.map((item, index) => (
          <ListItem button key={index} onClick={item.onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
