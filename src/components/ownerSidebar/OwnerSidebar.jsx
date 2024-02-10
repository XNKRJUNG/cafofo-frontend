import React from "react"
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import PeopleIcon from "@mui/icons-material/People"
import SettingsIcon from "@mui/icons-material/Settings"
import { useNavigate } from "react-router-dom"
import { Add, Money, OtherHouses, PlusOne } from "@mui/icons-material"

const drawerWidth = 240

const OwnerSidebar = () => {
  const navigate = useNavigate();

  const itemsList = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      onClick: () => navigate("/owner-dashboard")
    },
    {
      text: "My Properties",
      icon: <OtherHouses />,
      onClick: () => navigate("/owner-dashboard/properties")
    },
    {
      text: "Add New Property",
      icon: <Add/>,
      onClick: () => navigate("/owner-dashboard/properties/add-new-property")
    },
    {
      text: "Offers",
      icon: <Money/>,
      onClick: () => navigate("/owner-dashboard/offers")
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

export default OwnerSidebar
