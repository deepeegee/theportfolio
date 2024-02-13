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
  Backdrop,
  
} from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      style={{
        background: "white",
        backgroundColor: "transparent",
        color: "black",
      }}
      sx={{ backdropFilter: "blur(15px)" }}
      zIndex={5}
      boxShadow={"0px 4px 30px 0px rgba(0, 0, 0, 0.02)"}
    >
      <Box maxWidth="xl" top={0} left={0} zIndex={5}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="app" //logo
          >
            <AdsClickIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </IconButton>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "",
              fontWeight: 700,
              letterSpacing: "",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            OluwaTosin
          </Typography>
          <Stack
            direction="row"
            bgcolor={{ xs: "", md: "transparent" }}
            spacing={2}
          >
            <Button
              sx={{
                // display: { xs: "none", md: "flex" },
                fontFamily: "",
                fontWeight: 700,
              }}
              color="inherit"
            >
              About
            </Button>
            <Button
              sx={{
                // display: { xs: "none", md: "flex" },
                fontFamily: "",
                fontWeight: 700,
              }}
              color="inherit"
            >
              Projects
            </Button>
            <Button
              sx={{
                // display: { xs: "none", md: "flex" },
                fontFamily: "",
                fontWeight: 700,
              }}
              color="inherit"
            >
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Navbar;
