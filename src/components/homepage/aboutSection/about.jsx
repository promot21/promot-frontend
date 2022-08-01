import { Stack } from "@mui/material";
import React from "react";
import {
  AboutImage,
  Container,
  Description,
  KnowMoreButtom,
  Title,
} from "./about.components";
import Image from "../../../images/home-about.png";
import { Link } from "react-router-dom";
import { aboutLink } from "../../../common/routes";

function AboutSection() {
  return (
    <Container sx={{ width: { sm: "80%;" }, p: { xs: 2, sm: 0 } }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={9}
          sx={{ width: { sm: 600 }, mt: { xs: 0, sm: 7 } }}
        >
          {/* <Title>
            We are Promot. <br /> Your digital promotion one stop shop.
          </Title> */}
          <Description>
            We are passionate about art and its subsequent use in digital design
            & promote green earth initiative in all our practices.
          </Description>
          <KnowMoreButtom component={Link} to={aboutLink}>
            Know more
          </KnowMoreButtom>
        </Stack>
        <AboutImage
          component="img"
          src={Image}
          alt=""
          sx={{ mt: { xs: 5, sm: 0 } }}
        />
      </Stack>
    </Container>
  );
}

export default AboutSection;
