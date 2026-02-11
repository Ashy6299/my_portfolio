// src/Component/sideBar/SideBar.jsx
import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SideBarList from "./SideBarList";

const SIDEBAR_WIDTH_COLLAPSED = 72;
const SIDEBAR_WIDTH_EXPANDED = 230;

const SideBar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const width = expanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Fixed sidebar */}
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width,
          bgcolor: "#12232e",
          color: "common.white",
          display: "flex",
          flexDirection: "column",
          pt: 1,
          boxShadow: 3,
          zIndex: 1200,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: expanded ? "flex-end" : "center",
            px: 1,
          }}
        >
          <IconButton
            size="small"
            onClick={() => setExpanded((prev) => !prev)}
            sx={{ color: "common.white" }}
            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {expanded ? (
              <BsChevronLeft size={20} />
            ) : (
              <BsChevronRight size={20} />
            )}
          </IconButton>
        </Box>

        <SideBarList expandSidebar={expanded} />
      </Box>

      {/* Main content shifted to the right */}
      <Box
        component="main"
        sx={{
          ml: `${width}px`,
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SideBar;
