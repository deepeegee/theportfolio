import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { workHistoryData } from "./WorkHistory-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function WorkHistory() {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const intro1 = useRef(null);
  const intro2 = useRef(null);

  useEffect(() => {
    const el = intro1;
    gsap.fromTo(
      el.current,
      { opacity: 0, x: -150 },
      { opacity: 1, x: 0, duration: 4, ease: "power3.out" }
    );
    ScrollTrigger.create({
      trigger: el.current,
      start: "top center",
      end: "bottom center",
      scrub: true,
    });
    
    const el2 = intro2;
    gsap.fromTo(
      el2.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 4, ease: "power3.out" }
    );
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Stack gap={"2rem"} py={{ xs: 8, md: 10 }}>
          <Stack ref={intro1} alignItems={"center"} justifyContent={"center"}>
            <Typography
              textAlign={"center"}
              variant="h2"
              fontWeight={700}
              fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
              lineHeight={1.2}
            >
              Where I've Worked
            </Typography>
          </Stack>
        </Stack>
      </Container>
      
      <Container maxWidth="lg">
        <Stack ref={intro2} alignItems="center" spacing={4}>
          {/* Tab Navigation */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              overflowX: { xs: "auto", md: "visible" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {workHistoryData.map((job, index) => (
              <Button
                key={index}
                onClick={() => handleTabClick(index)}
                sx={{
                  minWidth: { xs: "150px", md: "200px" },
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "12px 20px",
                  borderBottom: activeTab === index ? "2px solid #C61036" : "2px solid transparent",
                  backgroundColor: activeTab === index ? "rgba(198, 16, 54, 0.1)" : "transparent",
                  color: activeTab === index ? "#C61036" : "inherit",
                  "&:hover": {
                    backgroundColor: "rgba(198, 16, 54, 0.05)",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  fontSize={{ xs: "0.9rem", sm: "0.95rem", md: "1rem" }}
                  fontWeight={activeTab === index ? 600 : 400}
                >
                  {job.company}
                </Typography>
              </Button>
            ))}
          </Box>

          {/* Tab Content */}
          <Box sx={{ maxWidth: "800px", width: "100%" }}>
            {workHistoryData[activeTab] && (
              <Stack spacing={3} alignItems="center" textAlign="center">
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize={{ xs: "1.3rem", sm: "1.4rem", md: "1.5rem" }}
                  lineHeight={1.2}
                >
                  {workHistoryData[activeTab].role} @ {workHistoryData[activeTab].company}
                </Typography>
                
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontSize={{ xs: "1rem", sm: "1.05rem", md: "1.1rem" }}
                >
                  {workHistoryData[activeTab].duration}
                </Typography>
                
                <Stack spacing={2} marginTop={2} alignItems="center">
                  {workHistoryData[activeTab].responsibilities.map((responsibility, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      fontSize={{ xs: "0.95rem", sm: "1rem", md: "1.05rem" }}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        maxWidth: "600px",
                        "&::before": {
                          content: '"▹"',
                          color: "#C61036",
                          marginRight: "8px",
                          fontSize: "1.2rem",
                        },
                      }}
                      color="text.secondary"
                    >
                      {responsibility}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            )}
          </Box>
        </Stack>
      </Container>
    </>
  );
} 