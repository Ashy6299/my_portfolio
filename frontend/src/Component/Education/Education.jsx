import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaGraduationCap } from "react-icons/fa";
import { Box, Typography } from "@mui/material";
import "react-vertical-timeline-component/style.min.css";

const educationData = [
  {
    name: "Kogi State University",
    degree: "B.Sc. Mathematics Education",
    year: "2014 – 2019",
    description:
      "Strong foundation in logical thinking, problem-solving, data analysis, and quantitative reasoning, which supports my work in software development and system design.",
  },
  {
    name: "Self-Taught Software Engineering",
    degree: "Full Stack Web Development (MERN)",
    year: "2020 – Present",
    description:
      "Practical hands-on experience building full-stack applications using React, Node.js, Express, MongoDB, and REST APIs, including admin dashboards, e-commerce systems, and analytics platforms.",
  },
];

const colors = [
  "#F44336",
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

const Education = () => {
  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        bgcolor: "#0f2027",
        color: "common.white",
      }}
    >
      {/* Section Title */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ color: "#00b894", fontWeight: "bold", mb: 1 }}
        >
          Education
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
      <VerticalTimeline lineColor="#00b894">
        {educationData.map((item, index) => {
          const color = colors[index % colors.length];
          return (
            <VerticalTimelineElement
              key={`${item.name}-${item.year}`}
              contentStyle={{
                background: color,
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${color}`,
              }}
              date={item.year}
              iconStyle={{
                background: color,
                color: "#fff",
              }}
              icon={<FaGraduationCap />}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 600, mb: 0.5 }}
              >
                {item.name}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{ color: "#ffe66d", mb: 1, fontWeight: 500 }}
              >
                {item.degree}
              </Typography>

              <Typography variant="body2">{item.description}</Typography>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Box>
  );
};

export default Education;
