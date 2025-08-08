import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
  const tabsRef = useRef([]);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      intro1.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Staggered tabs reveal on scroll
    gsap.fromTo(
      tabsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: intro2.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Stack gap={"2rem"} py={{ xs: 8, md: 10 }}>
          <Stack ref={intro1} alignItems="center" justifyContent="center">
            <Typography
              textAlign="center"
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
              flexDirection: "row",
              overflowX: isSmScreen ? "auto" : "visible",
              justifyContent: "center",
              gap: 2,
              pb: 1,
              "&::-webkit-scrollbar": { display: "none" },
            }}
            role="tablist"
            aria-label="Work history tabs"
          >
            {workHistoryData.map((job, index) => (
              <Button
                key={index}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => handleTabClick(index)}
                aria-selected={activeTab === index}
                sx={{
                  minWidth: { xs: "140px", md: "200px" },
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "10px 18px",
                  borderRadius: "50px",
                  border:
                    activeTab === index
                      ? "2px solid #C61036"
                      : "2px solid transparent",
                  backgroundColor:
                    activeTab === index ? "rgba(198, 16, 54, 0.08)" : "transparent",
                  color: activeTab === index ? "#C61036" : "inherit",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: "rgba(198, 16, 54, 0.06)",
                    transform: "translateY(-2px)",
                  },
                }}
                role="tab"
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

          {/* Tab Content (centered block, left-aligned text) */}
          <Box sx={{ maxWidth: "800px", width: "100%", mx: "auto" }}>
            {workHistoryData[activeTab] && (
              <Stack spacing={3} alignItems="center" textAlign="left">
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

                <List
                  disablePadding
                  sx={{
                    width: "100%",
                    maxWidth: "760px",
                    mt: 1,
                  }}
                >
                  {workHistoryData[activeTab].responsibilities.map(
                    (responsibility, index) => (
                      <ListItem
                        key={index}
                        alignItems="flex-start"
                        sx={{
                          paddingY: 0.8,
                          paddingX: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "34px",
                            color: "#C61036",
                            mt: "6px",
                          }}
                        >
                          <FiberManualRecordIcon sx={{ fontSize: "0.6rem" }} />
                        </ListItemIcon>

                        <ListItemText
                          primary={responsibility}
                          primaryTypographyProps={{
                            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                            color: "text.secondary",
                            lineHeight: 1.4,
                            align: "left",
                          }}
                        />
                      </ListItem>
                    )
                  )}
                </List>
              </Stack>
            )}
          </Box>
        </Stack>
      </Container>
    </>
  );
}
