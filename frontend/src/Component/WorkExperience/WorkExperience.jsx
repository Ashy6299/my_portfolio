import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdGroupWork } from "react-icons/md";

const workExperienceData = [
  {
    companyName: "Joint Admissions And Matriculation Board",
    position: "Full Stack Developer",
    description: "A job portal built using MERN stack.",
    year: "2021 – Present",
    techSkills: ["Node.js", "Express.js", "React.js", "MongoDB"],
  },
  {
    companyName: "Diamond Cafe",
    position: "Full Stack Developer",
    description: "A job portal built using MERN stack.",
    year: "2020 – 2021",
    techSkills: ["Node.js", "Express.js", "React.js", "MongoDB"],
  },
  {
    companyName: "SS Computers",
    position: "Full Stack Developer",
    description: "A job portal built using MERN stack.",
    year: "2013 – 2015",
    techSkills: ["Node.js", "Express.js", "React.js", "MongoDB"],
  },
  {
    companyName: "YouTube",
    position: "Full Stack Developer",
    description: "A job portal built using MERN stack.",
    year: "2013 – 2014",
    techSkills: ["Node.js", "Express.js", "React.js", "MongoDB"],
  },
  {
    companyName: "Facebook",
    position: "Full Stack Developer",
    description: "A job portal built using MERN stack.",
    year: "2013 – 2014",
    techSkills: ["Node.js", "Express.js", "React.js", "MongoDB"],
  },
  {
    companyName: "Instagram",
    position: "Full Stack Developer",
    description: "A job portal built using MERN stack.",
    year: "2013 – 2014",
    techSkills: ["Node.js", "Express.js", "React.js", "MongoDB"],
  },
  {
    companyName: "WhatsApp",
    position: "Full Stack Developer",
    description: "A job portal built using MERN stack.",
    year: "2013 – 2014",
    techSkills: ["Node.js", "Express.js", "React.js", "MongoDB"],
  },
];

const colors = [
  "#F44336",
  "#FFC0CB",
  "#A52A2A",
  "#F0E68C",
  "#8B4513",
  "#4169E1",
  "#7FFF00",
  "#FF6347",
  "#8A2BE2",
  "#DCDCDC",
  "#00CED1",
  "#FFD700",
  "#9400D3",
];

const WorkExperience = () => {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        bgcolor: "#0f2027",
        color: "common.white",
      }}
    >
      {/* Section title */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ color: "#00b894", fontWeight: "bold", mb: 1 }}
        >
          Work Experience
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 3,
            bgcolor: "#00b894",
            mx: "auto",
            borderRadius: 1,
          }}
        />
      </Box>

      {/* Timeline */}
      <VerticalTimeline lineColor="#ff1042">
        {workExperienceData.map((item, index) => {
          const color = colors[index % colors.length];

          return (
            <VerticalTimelineElement
              key={`${item.companyName}-${item.year}`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: color, color: "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid ${color}` }}
              date={item.year}
              iconStyle={{ background: color, color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 600, mb: 0.5 }}
              >
                {item.companyName}
              </Typography>

              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                {item.position}
              </Typography>

              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                sx={{ mb: 1.5 }}
                aria-label="Tech skills"
              >
                {item.techSkills.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "#fff",
                      borderRadius: 1,
                      fontSize: "0.75rem",
                    }}
                  />
                ))}
              </Stack>

              <Typography variant="body2">{item.description}</Typography>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Box>
  );
};

export default WorkExperience;
