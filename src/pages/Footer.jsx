import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Contact from "../assets/contact-me.png";

const headingStyle = {
  // Add your heading styles here
  fontSize:  "2rem",
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
    <Box py={{ xs: 6, md: 1 }} minHeight={100} id="contact">
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
        <a href="mailto:tosinorunesajo@gmail.com" target="_blank" rel="noreferrer" id="meeting">
          <button style={buttonStyle}>Say Hi</button>
        </a>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ 
            marginTop: 2, 
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            textAlign: "center",
            maxWidth: { xs: "280px", sm: "400px" },
            lineHeight: 1.4
          }}
        >
          Based in Lagos, Nigeria • Available for remote opportunities
        </Typography>
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
            justifyContent={"center"}
            gap={"1rem"}
          >
            <Typography variant="subtitle2" textAlign="center">
              © 2025 OluwaTosin
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
