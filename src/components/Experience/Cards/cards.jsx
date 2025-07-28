import React, { useState } from "react";
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
import { useTheme, ThemeProvider, CardActionArea, useMediaQuery } from "@mui/material";
import Modal from '@mui/material/Modal';

import { theme, darkTheme } from "../../../Theme/Theme";

export default function MediaCard({ projectIndex }) {
  const experience = experienceData[projectIndex];
  if (!experience) {
    return null;
  }

  const [isLiveButtonHovered, setIsLiveButtonHovered] = useState(false);
  const [isGitButtonHovered, setIsGitButtonHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const currentTheme = useTheme();

  const handleLiveButtonHover = () => {
    setIsLiveButtonHovered(!isLiveButtonHovered);
  };

  const handleGitButtonHover = () => {
    setIsGitButtonHovered(!isGitButtonHovered);
  };

  const handleOpen = (src) => {
    setImageSrc(src);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const imgSize = isSmScreen ? "25em" : "68.4em";

  const handleLiveDemo = () => {
    if (experience.liveDemo && experience.liveDemo !== 'https://your-ecommerce-demo.com') {
      window.open(experience.liveDemo, '_blank');
    }
  };

  const handleGitHub = () => {
    if (experience.githubLink && experience.githubLink !== 'https://github.com/yourusername/ecommerce-platform') {
      window.open(experience.githubLink, '_blank');
    }
  };

  return (
    <ThemeProvider
      theme={currentTheme.palette.mode === "dark" ? darkTheme : theme}
    >
      <Box
        sx={{
          maxWidth: 645,
        }}
        style={{ backgroundColor: "inherit" }}
      >
        <Card sx={{ borderRadius: "20px", padding: "20px" }}>
          <CardActionArea onClick={() => handleOpen(experience.imageUrl)}>
            <CardMedia
              sx={{ height: 200, borderRadius: "10px" }}
              image={experience.imageUrl}
              title={experience.projectName}
            />
          </CardActionArea>

          <CardContent>
            <Typography 
              gutterBottom 
              variant="h4" 
              component="div"
              fontWeight={600}
              fontSize={{ xs: "1.3rem", sm: "1.4rem", md: "1.5rem" }}
              lineHeight={1.2}
              sx={{ marginBottom: 2 }}
            >
              {experience.projectName}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ marginBottom: 2 }}
              fontSize={{ xs: "0.95rem", sm: "1rem", md: "1.05rem" }}
              lineHeight={1.6}
              color="text.secondary"
            >
              {experience.description}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              fontSize={{ xs: "0.9rem", sm: "0.95rem", md: "1rem" }}
            >
              {experience.technologiesUsed.join(", ")}
            </Typography>
          </CardContent>
          <Box style={{ display: "flex" }}>
            <CardActions
              onMouseEnter={handleLiveButtonHover}
              onMouseLeave={handleLiveButtonHover}
            >
              <Button
                onClick={handleLiveDemo}
                style={{
                  backgroundColor: isLiveButtonHovered
                    ? currentTheme.palette.primary.main
                    : "white",
                  color: isLiveButtonHovered ? "#C61036" : "black",
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
                onClick={handleGitHub}
                style={{
                  backgroundColor: isGitButtonHovered
                    ? currentTheme.palette.primary.main
                    : "white",
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <img
              src={imageSrc}
              alt="Maximized"
              style={{ maxWidth: imgSize, maxHeight: '100%' }}
            />
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
}
