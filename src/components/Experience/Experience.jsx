import React, { useState, useEffect, useRef } from "react";
import { stackImgs } from "../../utils/StackImgs";
import Prof from "../../assets/proficiency.png";
import Proj from "../../assets/project.png";
import { Chip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code"; // Optional: you can pick others
import {
  Toolbar,
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Box,
  Backdrop,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MediaCard from "./Cards/cards";
import WorkHistory from "./WorkHistory";
import "./Experience.css";

import GridSystem from "@mui/system/Unstable_Grid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Experience({ darkMode }) {
  const intro1 = useRef(null);
  const intro2 = useRef(null);
  const intro3 = useRef(null);
  const intro4 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
    const el3 = intro3;
    gsap.fromTo(
      el3.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 4, ease: "power3.out" }
    );
    const el4 = intro4;
    gsap.fromTo(
      el4.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 4, ease: "power3.out" }
    );
  }, []);

  const skillsData = {
    Languages: ["JavaScript (ES6)", "TypeScript", "HTML", "CSS"],
    Frameworks: [
      "React",
      "Node",
      "Wordpress",
      "Tailwind CSS",
      "Next.js",
      "Vite",
      "Material UI",
    ],
    Tools: [
      "Git & Github",
      "Gulp & Grunt",
      "Chrome DevTools",
      "Postman",
      "MongoDB",
      "Express",
    ],
    Design: ["Figma", "Prototyping", "Wireframing", "User Testing"],
  };

  return (
    <>
      <Container maxWidth="xl" id="experience">
        <Stack gap={"2rem"} py={{ xs: 8, md: 10 }}>
          <Stack ref={intro1} alignItems={"center"} justifyContent={"center"}>
            <img src={Prof} alt="" width={200} border={0} />
            <Typography
              textAlign={"center"}
              variant="h2"
              fontWeight={700}
              fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
              lineHeight={1.2}
            >
              Experience
            </Typography>
            <GridSystem
              sx={{ flexGrow: 1 }}
              direction={{ xs: "row", md: "row" }}
              justifyContent="center"
              py={{ xs: 8, md: 10 }}
              gap={{ xs: "1rem", md: "4rem" }}
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {stackImgs.map((itr, id) => (
                <GridSystem
                  xs={2}
                  sm={4}
                  key={id}
                  component={"img"}
                  src={itr}
                  height={{ xs: "90px", md: "90px" }}
                  width={{ xs: "90px", md: "90px" }}
                />
              ))}
            </GridSystem>

            {/* Technologies Text */}
            <Typography
              textAlign="center"
              variant="h5"
              fontWeight={400}
              fontSize={{ xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }}
              lineHeight={1.6}
              maxWidth="800px"
              sx={{ marginTop: 4, marginBottom: 4 }}
              color="text.secondary"
            >
              Here are a few technologies I've been working with recently:
            </Typography>

            {/* Skills Grid */}

            <Container maxWidth="lg">
              <Stack ref={intro4} alignItems="center" spacing={4}>
                <Grid container spacing={4} justifyContent="center">
                  {Object.entries(skillsData).map(([category, skills]) => (
                    <Grid item xs={12} sm={6} md={3} key={category}>
                      <Stack spacing={2} alignItems="center">
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          color="#C61036"
                          fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                          textAlign="center"
                        >
                          {category}
                        </Typography>

                        <Stack
                          direction="row"
                          flexWrap="wrap"
                          justifyContent="center"
                          spacing={1}
                          useFlexGap
                        >
                          {skills.map((skill, index) => (
                            <Chip
                              key={index}
                              label={skill}
                              variant="outlined"
                              icon={<CodeIcon sx={{ color: "#C61036" }} />}
                              sx={{
                                borderColor: "#C61036",
                                color: "text.secondary",
                                fontSize: { xs: "0.75rem", sm: "0.8rem" },
                              }}
                            />
                          ))}
                        </Stack>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Container>
          </Stack>
        </Stack>
      </Container>

      {/* Work History Section */}
      <WorkHistory />

      {/* Spacing between sections */}
      <Box sx={{ py: { xs: 6, md: 8 } }} />

      <Container>
        <Stack ref={intro3} alignItems={"center"} justifyContent={"center"}>
          <img src={Proj} alt="" width={180} border={0} />
          <Typography
            alignItems={"center"}
            justifyItems={"center"}
            textAlign={"center"}
            variant="h2"
            fontWeight={700}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            lineHeight={1.2}
          >
            Some Things I've Built{" "}
          </Typography>
        </Stack>
        <br />
        <br />

        <Swiper
          ref={intro2}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{
            "--swiper-navigation-color": darkMode ? "#fff" : "#000",
            "--swiper-pagination-color": darkMode ? "#fff" : "#000",
          }}
        >
          <SwiperSlide>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyItems={"center"}
              mx={"auto"}
              maxWidth={768}
            >
              <MediaCard projectIndex={0} />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyItems={"center"}
              mx={"auto"}
              maxWidth={768}
            >
              <MediaCard projectIndex={1} />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyItems={"center"}
              mx={"auto"}
              maxWidth={768}
            >
              <MediaCard projectIndex={2} />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyItems={"center"}
              mx={"auto"}
              maxWidth={768}
            >
              <MediaCard projectIndex={3} />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyItems={"center"}
              mx={"auto"}
              maxWidth={768}
            >
              <MediaCard projectIndex={4} />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyItems={"center"}
              mx={"auto"}
              maxWidth={768}
            >
              <MediaCard projectIndex={5} />
            </Stack>
          </SwiperSlide>
          <br />
          <br />
        </Swiper>
      </Container>
    </>
  );
}
