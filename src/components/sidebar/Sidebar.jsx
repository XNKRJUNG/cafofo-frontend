import React from "react"
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import PeopleIcon from "@mui/icons-material/People"
import SettingsIcon from "@mui/icons-material/Settings"
import { useNavigate } from "react-router-dom"
import { Checklist } from "@mui/icons-material"

const drawerWidth = 240

const Sidebar = () => {
  const navigate = useNavigate();

  const itemsList = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      onClick: () => navigate("/admin-dashboard")
    },
    {
      text: "Users",
      icon: <PeopleIcon />,
      onClick: () => navigate("/admin-dashboard/users")
    },
    {
      text: "Property Approval",
      icon: <Checklist />,
      onClick: () => navigate("/admin-dashboard/properites-to-be-approved")
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
