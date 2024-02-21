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
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MediaCard from "../cards";
import {experienceData} from "../Experience/Experience-data";

export default function Experience() {
  return (
    <>
      <Container maxWidth="xl">
        <Stack gap={"2rem"} py={{ xs: 8, md: 10 }}>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <img src={Prof} alt="" width={200} border={0} />
            <Typography
              textAlign={"center"}
              variant="h4"
              color={"BLACK"}
              fontWeight={600}
            >
              Experience
            </Typography>
            <Stack
              direction="row"
              spacing={10}
              justifyContent={"center"}
              py={{ xs: 8, md: 10 }}
              gap={"4rem"}
            >
              {stackImgs.map((itr, id) => (
                <Box key={id} component={"img"} src={itr} height={"70px"} />
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
          color={"BLACK"}
          fontWeight={600}
        >
          Projects
        </Typography>
        {/* <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            Slide 1 <img src={Prof} alt="" width={600} border={0} />
          </SwiperSlide>
          <SwiperSlide>
            Slide 2 <img src={Prof} alt="" width={200} border={0} />
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyItems={"center"}
              mx={"auto"}
              maxWidth={768}
            >
              <br />
              <br />

              <br />
              <br />

              <MediaCard />
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            Slide 4 <img src={Prof} alt="" width={200} border={0} />
            <Button
              size="large"
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "12px",
                bgcolor: "black",
              }}
            >
              Get Started
            </Button>
          </SwiperSlide>
        </Swiper> */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {experienceData.map((experience, index) => (
          <SwiperSlide key={index}>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyItems={"center"}
              mx={"auto"}
              maxWidth={768}
            >
              <br />
              <br />
              <br />
              <br />
              <MediaCard experience={experienceData} />
            </Stack>
          </SwiperSlide>
        ))}
        </Swiper>
      </Container>
    </>
  );
}
