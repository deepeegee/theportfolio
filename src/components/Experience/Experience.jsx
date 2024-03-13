import React, { useState, useEffect, useRef } from "react";
import { stackImgs } from "../../utils/StackImgs";
import Prof from "../../assets/proficiency.png";
import Proj from "../../assets/project.png";

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
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MediaCard from "./Cards/cards";
import "./Experience.css";

import Grid from "@mui/system/Unstable_Grid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Experience({ darkMode }) {
  const intro1 = useRef(null);
  const intro2 = useRef(null);

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
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Stack gap={"2rem"} py={{ xs: 8, md: 10 }}>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <img src={Prof} alt="" width={200} border={0} />
            <Typography
              textAlign={"center"}
              variant="h4"
              fontWeight={600}
              fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            >
              Experience
            </Typography>
            <Grid
              sx={{ flexGrow: 1 }}
              direction={{ xs: "row", md: "row" }} // Adjust the direction based on the screen size
              justifyContent="center"
              py={{ xs: 8, md: 10 }}
              gap={{ xs: "1rem", md: "4rem" }} // Adjust the gap between image rows/columns based on the screen size
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {stackImgs.map((itr, id) => (
                <Grid
                  xs={2}
                  sm={4}
                  key={id}
                  component={"img"}
                  src={itr}
                  height={{ xs: "90px", md: "90px" }} // Adjust the height based on the screen size
                  width={{ xs: "90px", md: "90px" }} // Adjust the width based on the screen size
                />
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Container>
      <Container>
        <Stack ref={intro2} alignItems={"center"} justifyContent={"center"}>
          <img src={Proj} alt="" width={180} border={0} />
          <Typography
            alignItems={"center"}
            justifyItems={"center"}
            textAlign={"center"}
            variant="h4"
            fontWeight={600}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
          >
            Some Things I’ve Built{" "}
          </Typography>
        </Stack>
        <br />
        <br />

        <Swiper
          ref={intro1}
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
          <br />
          <br />
        </Swiper>
      </Container>
    </>
  );
}
