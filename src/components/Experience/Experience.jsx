import React from "react";
import { stackImgs } from "../../utils/StackImgs";
import Prof from "../../assets/proficiency.png";
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

export default function Experience({ darkMode }) {
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
              sx={{ color: darkMode ? "white" : "black" }}
            >
              Experience
            </Typography>
            <Stack
              direction={{ xs: "row", md: "row" }} // Adjust the direction based on the screen size
              spacing={2} // Adjust the spacing between images
              justifyContent="center"
              py={{ xs: 8, md: 10 }}
              
              gap={{ xs: "1rem", md: "4rem" }} // Adjust the gap between image rows/columns based on the screen size
            >
              {stackImgs.map((itr, id) => (
                <Box
                  key={id}
                  component={"img"}
                  src={itr}
                  height={{ xs: "50px", md: "60px" }} // Adjust the height based on the screen size
                  width={{ xs: "80%", md: "auto" }} // Adjust the width based on the screen size
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Container>
        <Typography
          alignItems={"center"}
          justifyItems={"center"}
          textAlign={"center"}
          variant="h4"
          fontWeight={600}
        >
          Projects
        </Typography>
        <br />
        <br />

        <Swiper
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
