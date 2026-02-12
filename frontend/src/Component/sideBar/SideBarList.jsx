import React from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import profilepic from "../../Images/a.png";
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
    offset: -80, // adjust based on sidebar/topbar height
  });
};

const SideBarList = ({ expandSidebar }) => {
  return (
    <Box sx={{ mt: 1, flexGrow: 1, overflowY: "auto" }}>
      {expandSidebar && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Avatar
            src={profilepic}
            alt="Ashraff Adams"
            sx={{ width: 72, height: 72, mb: 1, boxShadow: 3 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Ashraff Adams
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            Full Stack Developer
          </Typography>
        </Box>
      )}

      <List>
        {navLinks.map(({ id, label, icon }) => (
          <ListItemButton
            key={id}
            onClick={() => scrollToSection(id)}
            sx={{
              justifyContent: expandSidebar ? "flex-start" : "center",
              px: expandSidebar ? 2 : 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: expandSidebar ? 2 : 0,
                justifyContent: "center",
                color: "inherit",
              }}
            >
              {icon}
            </ListItemIcon>
            {expandSidebar && (
              <ListItemText
                primary={label}
                primaryTypographyProps={{ variant: "body2" }}
              />
            )}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default SideBarList;
