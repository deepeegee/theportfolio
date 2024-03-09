import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { socialHolder } from "../utils/navLinks";
import Contact from "../assets/contact-me.png";

const headingStyle = {
  // Add your heading styles here
  fontSize: "2rem",
  marginBottom: "1rem",
};

const emailLinkStyle = {
  // Add your email link styles here
  textDecoration: "none",
  color: "#C61036",
  fontSize: "1.2rem",
};

const buttonStyle = {
  // Add your button styles here
  backgroundColor: "#C61036",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const centerStyle = {
  // Add styles to center the content horizontally and vertically
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function HomeFooter() {
  return (
    <Box py={{ xs: 6, md: 1 }} minHeight={100}>
      <Box>
        <Container sx={{ flex: 1 }}>
          <Stack>
            <img
              src
              alt=""
              width={{ xs: "60%", md: "80%", lg: 370 }}
              mx="auto" // Center the image horizontally
              sx={{
                display: { xs: "block", md: "none" },
                marginBottom: { xs: 4, md: 0 },
              }}
            />
          </Stack>
        </Container>
      </Box>
      <Stack
        alignItems={"center"}
        style={centerStyle}
        justifyContent={"center"}
      >
        <img src={Contact} alt="" width={190} border={0} />
        <h1 style={headingStyle} id="contact-heading">
          Get In Touch{" "}
        </h1>
        <a
          href="mailto:tosinorunesajo@gmail.com"
          id="email"
          style={emailLinkStyle}
        >
          <p>tosinorunesajo@gmail.com</p>
        </a>
        <a href="" target="_blank" rel="noreferrer" id="meeting">
          <button style={buttonStyle}>Book a Meeting</button>
        </a>
      </Stack>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          rowGap={"1.8rem"}
          pb={5}
        >
          <Stack
            gap={"1rem"}
            width={{ md: 250, lg: 300 }}
            // sx={{ "*": { color: "white !important" } }}
          ></Stack>
        </Stack>
        <Box height={1.5} my={2} bgcolor={"grey.100"} />
        <Box py={2} minHeight={50}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            gap={"1rem"}
          >
            <Typography variant="subtitle2">
              © {new Date().getFullYear()} All right Reserved
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"1rem"}>
              {socialHolder.subs.map((item, id) => (
                <a key={id} href={item.link} target="_blank">
                  <Box component={"img"} src={item.img} width={25} />
                </a>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
