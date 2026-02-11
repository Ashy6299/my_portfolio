import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Stack,
  Chip,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { FcExpand, FcCollapse } from "react-icons/fc";
import { FiExternalLink } from "react-icons/fi";

const ProjectList = ({
  name,
  description = "",
  projectLink,
  techUsed = [],
}) => {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 140;
  const isLong = description.length > maxLength;
  const displayText =
    expanded || !isLong ? description : `${description.slice(0, maxLength)}...`;

  const toggleExpanded = () => setExpanded((prev) => !prev);
  const hasLink = projectLink && projectLink !== "#";

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#12232e",
        color: "common.white",
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Title + Expand/Collapse Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#00b894", pr: 1 }}
          >
            {name}
          </Typography>

          {isLong && (
            <IconButton
              onClick={toggleExpanded}
              size="small"
              aria-label={
                expanded ? "Collapse description" : "Expand description"
              }
              aria-expanded={expanded}
              sx={{ color: "#fff" }}
            >
              {expanded ? <FcCollapse size={20} /> : <FcExpand size={20} />}
            </IconButton>
          )}
        </Box>

        {/* Description with Read more / Show less */}
        <Typography variant="body2" sx={{ color: "#ddd" }}>
          {displayText}
          {isLong && (
            <Box
              component="span"
              onClick={toggleExpanded}
              sx={{
                color: "#00b894",
                cursor: "pointer",
                fontWeight: 500,
                ml: 0.5,
              }}
            >
              {expanded ? " Show less" : " Read more"}
            </Box>
          )}
        </Typography>

        {/* Tech chips */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          sx={{ mt: 2 }}
          aria-label="Technologies used"
        >
          {techUsed.map((tech) => (
            <Chip
              key={tech.techName}
              label={tech.techName}
              size="small"
              sx={{
                bgcolor: "rgba(0, 184, 148, 0.15)",
                color: "#00b894",
                borderRadius: 1,
                fontSize: "0.75rem",
                border: "1px solid rgba(0, 184, 148, 0.4)",
              }}
            />
          ))}
        </Stack>
      </CardContent>

      {/* View Project button */}
      {hasLink && (
        <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
          <Button
            size="small"
            variant="outlined"
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: "#00b894",
              color: "#00b894",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#00b894",
                color: "#fff",
              },
            }}
            endIcon={<FiExternalLink size={16} />}
          >
            View Project
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default ProjectList;
