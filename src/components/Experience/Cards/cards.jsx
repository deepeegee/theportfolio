import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CgArrowTopRight } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { experienceData } from "../Experience-data";
import { theme, darkTheme } from "../../../Theme/Theme";
import { Container } from "@mui/material";

export default function MediaCard({ projectIndex, darkMode }) {
  console.log("darkMode:", darkMode);
  const experience = experienceData[projectIndex];
  if (!experience) {
    return null;
  }

  const [isLiveButtonHovered, setIsLiveButtonHovered] = useState(false);
  const [isGitButtonHovered, setIsGitButtonHovered] = useState(false);

  const handleLiveButtonHover = () => {
    setIsLiveButtonHovered(!isLiveButtonHovered);
  };

  const handleGitButtonHover = () => {
    setIsGitButtonHovered(!isGitButtonHovered);
  };

  const currentTheme = createTheme(darkMode ? darkTheme : theme);

  return (
    <ThemeProvider theme={currentTheme}>
      <Box
        sx={{
          maxWidth: 545,
          boxShadow: 8,
          color: darkMode ? "#fff" : "#333",
        }}
      >
        <Card style={{ backgroundColor: "#EFE7E7" }}>
          <CardMedia
            sx={{ height: 140, borderRadius: "10px" }}
            image={experience.imageUrl}
            title={experience.projectName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {experience.projectName}
            </Typography>
            <Typography variant="body2">{experience.description}</Typography>
            <Typography variant="body3">
              {experience.technologiesUsed.join(", ")}
            </Typography>
          </CardContent>
          <Box style={{ display: "flex" }}>
            <CardActions
              onMouseEnter={handleLiveButtonHover}
              onMouseLeave={handleLiveButtonHover}
            >
              <Button
                style={{
                  backgroundColor: isLiveButtonHovered ? "#888888" : "white",
                  color: isLiveButtonHovered ? "#C61036" : "black",
                  position: "inherit",
                }}
                sx={{
                  textTransform: "none",
                  borderRadius: "12px",
                  bgcolor: "inherit",
                }}
                size="small"
              >
                Live Demo <CgArrowTopRight />
              </Button>
            </CardActions>
            <CardActions
              onMouseEnter={handleGitButtonHover}
              onMouseLeave={handleGitButtonHover}
            >
              <Button
                style={{
                  backgroundColor: isGitButtonHovered ? "#888888" : "white",
                  color: isGitButtonHovered ? "#C61036" : "black",
                }}
                sx={{
                  textTransform: "none",
                  borderRadius: "12px",
                  bgcolor: "inherit",
                }}
                size="small"
              >
                Github <FaGithub />
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
