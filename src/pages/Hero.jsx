import {
  Box,
  Container,
  Stack,
  Typography,
  makeStyles,
  Button,
} from "@mui/material";
import HeroBg from "../assets/bggg.png";
import { Link } from "react-router-dom";
import StyledButton from "../components/Button";
import { ReactTyped } from "react-typed";
import React, { useState } from "react";

export default function Hero() {
  const [key, setKey] = useState(0);

  const restartTyping = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          padding: { xs: 4, md: 8 },
          flexDirection: { xs: "column", md: "row" },
        }}

        //   minHeight={600}
        //   sx={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
      >
        <Container maxWidth="lg" sx={{ flex: 2 }}>
          <Stack
            pt={{ xs: 15, md: 10 }}
            // alignItems={"center"}
            // justifyContent={"center"}
            gap={4}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography
              variant="h2"
              fontWeight={500}
              fontSize={{ xs: "2.5rem", sm: "3rem", md: "3.2rem" }}
              align="left"
            >
              Hey there! My name is
              <br />
              Tosin Sajo
              <br />I am a {""}
              <ReactTyped
                key={key}
                backSpeed={50}
                strings={["Frontend Developer", "Network Engineer", "Software Developer"]}
                typeSpeed={50}
                onComplete={restartTyping}
                typedRef={function noRefCheck() {}}
                style={{ color: "#C61036" }}
                cursorChar=">"
              />
            </Typography>
            <Typography
              variant="h5"
              maxWidth={768}
              fontWeight={400}
              align="left"
            >
              When the world gives you bugs, I code them into features.
              <br />
              With a few years of experience in cheffing, I'm
              passionate about creating engaging and functional solutions that
              meet users' needs (cooking)
            </Typography>

            {/* <Box
            mt={2}
            height={{ xs: 250, md: 400 }}
            width={{ xs: "100%", sm: "90%", lg: 1000 }}
            sx={{
              backgroundImage: `url(${HeroBgTwo})`,
              backgroundSize: "cover",
              borderRadius: "16px 16px 0 0",
            }}
          ></Box> */}
          </Stack>
          <br />
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={{ xs: 2, md: 1.5 }}
            alignItems={{ xs: "center", md: "flex-start" }}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {/* <Link to={"/"}>
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
            </Button> */}
            {/* </Link> */}
            {/* <Link to={"/"}> */}
            {/* <Button
              size="large"
              variant="outlined"
              sx={{
                bgcolor: "white",
                textTransform: "none",
                color: "black",
                borderRadius: "12px",
              }}
            >
              Become an Affiliate
            </Button> */}
            {/* </Link> */}
          </Stack>
        </Container>
        <Container sx={{ flex: 1 }}>
          <Stack>
            <img
              src={HeroBg}
              alt=""
              width={{ xs: "60px", md: "80%", lg: 370 }}
              mx="auto" // Center the image horizontally
              sx={{
                display: { xs: "block", md: "none" },
                marginBottom: { xs: 4, md: 0 },
              }}
            />
          </Stack>
        </Container>
      </Box>
      {/* <Stack alignItems={"center"} justifyContent={"center"} padding={"30px"}>
        <StyledButton text={"Click Me"} link={"/"}></StyledButton>
      </Stack> */}
    </>
  );
}
