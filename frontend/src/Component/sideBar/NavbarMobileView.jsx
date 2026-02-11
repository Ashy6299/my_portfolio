import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FcHome,
  FcContacts,
  FcTodoList,
  FcFactory,
  FcNightPortrait,
} from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";
import { scroller } from "react-scroll";

const navLinks = [
  { id: "home", label: "Home", icon: <FcHome size={22} /> },
  { id: "about", label: "About", icon: <FcNightPortrait size={22} /> },
  { id: "experience", label: "Work Experience", icon: <FcFactory size={22} /> },
  { id: "tech-stack", label: "Tech Stack", icon: <MdBiotech size={22} /> },
  {
    id: "education",
    label: "Education",
    icon: <MdCastForEducation size={22} />,
  },
  { id: "projects", label: "Projects", icon: <FcTodoList size={22} /> },
  { id: "contact", label: "Contact", icon: <FcContacts size={22} /> },
];

const scrollToSection = (id) => {
  scroller.scrollTo(id, {
    duration: 400,
    smooth: true,
    offset: -80, // adjust based on AppBar height
  });
};

const NavbarMobileView = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            aria-label="open navigation"
          >
            <GiHamburgerMenu size={24} />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 1 }}>
            Ashraff Adams
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* spacer under AppBar */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            bgcolor: "#0f2027",
            color: "white",
            height: "100%",
          }}
          role="presentation"
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ color: "#00b894", mb: 1 }}>
              Navigation
            </Typography>
          </Box>

          <List>
            {navLinks.map(({ id, label, icon }) => (
              <ListItemButton
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setOpen(false);
                }}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMobileView;
