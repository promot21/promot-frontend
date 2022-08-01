import React from "react";
import { Grid, Stack } from "@mui/material";
import { InnerWrapper, OuterWrapper } from "../wrapper/wrapper";
import {
  Description,
  Designation,
  ImageContainer,
  Name,
  SocialIcon,
  Title,
} from "./team.components";
import MemberDetails from "./content";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Team() {
  return (
    <OuterWrapper>
      <InnerWrapper sx={{ my: { xs: "50px", sm: "140px" } }}>
        <Title>Team</Title>
        <Grid
          container
          sx={{
            width: { xs: "90%", sm: "70%" },
            mx: "auto",
            justifyContent: "space-around",
          }}
        >
          {MemberDetails.map((data, index) => {
            return (
              <Grid item sx={{ width: 431, pb: 4 }}>
                <ImageContainer
                  component="img"
                  src={data.image}
                  alt=""
                  sx={{ width: { xs: "100%", sm: 431 }, height: { sm: 431 } }}
                />
                <Name sx={{ width: { xs: "100%", sm: 431 } }}>{data.name}</Name>
                <Designation sx={{ width: { xs: "100%", sm: 431 } }}>
                  {data.designation}
                </Designation>
                <Description sx={{ width: { xs: "100%", sm: 431 } }}>
                  {data.about}
                </Description>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  pt={1}
                >
                  {data.twitter ? (
                    <SocialIcon
                      component="a"
                      href={data.twitter}
                      target="_blank"
                      customColor="#55acee"
                    >
                      <FaTwitter />
                    </SocialIcon>
                  ) : (
                    ""
                  )}
                  {data.linkedin ? (
                    <SocialIcon
                      component="a"
                      href={data.linkedin}
                      target="_blank"
                      customColor="#0077b5"
                    >
                      <FaLinkedinIn />
                    </SocialIcon>
                  ) : (
                    ""
                  )}
                  {data.instagram ? (
                    <SocialIcon
                      component="a"
                      href={data.instagram}
                      target="_blank"
                      customColor="#e4405f"
                    >
                      <FaInstagram />
                    </SocialIcon>
                  ) : (
                    ""
                  )}
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default Team;
