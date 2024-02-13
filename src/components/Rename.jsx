import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Box,
} from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";

function Rename() {
  return (
    <React.Fragment>
      <Box
      component={"nav"}
      boxShadow={"0px 4px 30px 0px rgba(0, 0, 0, 0.02)"}
      position={"sticky"}
      top={0}
      left={0}
      zIndex={5}
      sx={{ backdropFilter: "blur(15px)" }}
    >
      <Container maxWidth="lg">
        <Stack
          py={{ xs: 1.5, sm: 2 }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            py={{ xs: 2, md: 0 }}
            direction={{ xs: "column", md: "row" }}
            gap={"1.5rem"}
            alignItems={"center"}
            position={{ xs: "fixed", md: "static" }}
            top={65}
            left={0}
            width={{ xs: "100%", md: "auto" }}
            bgcolor={{ xs: "white", md: "transparent" }}
            zIndex={6}
            sx={{
              transition: "transform .3s",
              transform: {
                xs: navOpen ? "translateY(0%)" : "translateY(-200%)",
                md: "none",
              },
            }}
          ></Stack>
        </Stack>
      </Container>
      </Box>
    </React.Fragment>
      
  );
}

export default Rename;
