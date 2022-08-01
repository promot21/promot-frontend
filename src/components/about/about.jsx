import React from "react";
import { Stack } from "@mui/material";
import {
  BulletIcon,
  DateText,
  Description,
  Timeline,
  Title,
} from "./about.components";
import { OuterWrapper, InnerWrapper } from "../wrapper/wrapper";

function About() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
          sx={{
            width: { xs: "80%", sm: "70%" },
            mx: "auto",
            my: { xs: "50px", sm: "140px" },
          }}
        >
          <Title>
            We are Promot. <br />
            Your digital promotion one stop shop.
          </Title>
          <Description>
            We are passionate about art and its subsequent use in digital design
            & promote green earth initiative in all our practices.
          </Description>

          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
          >
            {ListData("2020", "Started the whole venture.")}
            {ListData("2021", "Stepped into design.")}
            {ListData("2022", "Digitalizing local businesses.")}
          </Stack>
        </Stack>
      </InnerWrapper>
    </OuterWrapper>
  );

  function ListData(date, text) {
    return (
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <BulletIcon />
        <DateText>{date}</DateText>
        <Timeline> · &nbsp; {text}</Timeline>
      </Stack>
    );
  }
}

export default About;
