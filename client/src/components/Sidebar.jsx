import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  
  import React from "react";
  
  const Sidebar = ({mode,setMode}) => {
    return (
      <Box flex={1} p={10} sx={{ display: { xs: "none", sm: "block" }}}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              
              <ListItemButton component="a" href="/Catagory">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Food" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Catagory">
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Religion" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Catagory">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Fashion" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Catagory">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Love" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Catagory">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Travel" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Catagory">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Sports" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>  
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Catagory">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Makeup" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Catagory">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Games" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Catagory">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Stydy" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;