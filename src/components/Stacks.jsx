import React from "react";
import { stackImgs } from "../utils/StackImgs";

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
import ScrollCarousel from "scroll-carousel-react";

export default function Stacks() {
  return (
    <Container maxWidth="xl">
      <Stack gap={"2rem"} py={{ xs: 8, md: 10 }}>
        <Typography
          textAlign={"center"}
          variant="h6"
          color={"grey"}
          fontWeight={300}
        >
          I sabi am small
        </Typography>
        <Box
         
        >
          <ScrollCarousel
            autoplay={true}
            speed={1}
            smartSpeed={true}
            margin={60}
          >
            {stackImgs.map((itr, id) => (
              <Box key={id} component={"img"} src={itr} height={"70px"} />
            ))}
          </ScrollCarousel>
        </Box>
      </Stack>
    </Container>
  );
}
