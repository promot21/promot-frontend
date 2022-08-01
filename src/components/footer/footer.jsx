import React from "react";
import { IconButton, Stack, Box, Grid } from "@mui/material";
import { InnerWrapper, OuterWrapper } from "../wrapper/wrapper";
import CompanyLogo from "../../images/logo.png";
import TwitterIcon from "../../images/socials/twitter.png";
import InstagramIcon from "../../images/socials/instagram.png";
import BehanceIcon from "../../images/socials/behance.png";
import { ContactButton, FooterLink, FooterTitle } from "./footer.components";
import { useNavigate } from "react-router-dom";
import {
  blogLink,
  aboutLink,
  serviceLink,
  portfolioLink,
  teamLink,
  contactLink,
} from "../../common/routes";

const twitterLink = "https://twitter.com/Promotbranding";
const instagramLink = "https://www.instagram.com/promotbranding/";
const behanceLink = "https://www.behance.net/promotbranding";

function Footer() {
  const navigate = useNavigate();

  return (
    <OuterWrapper
      sx={{ backgroundColor: "#f9f9f9", height: { xs: 625, sm: 225 }, py: 6 }}
    >
      <InnerWrapper>
        <Grid container justifyContent="space-around">
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={CompanyLogo}
              alt=""
              sx={{ width: 185, height: 70 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FooterTitle sx={{ mb: 2.6, mt: { xs: 4, sm: 0 } }}>
              Roadmap
            </FooterTitle>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <FooterLink to={blogLink}>Blog</FooterLink>
              <FooterLink to={aboutLink}>About</FooterLink>
              <FooterLink to={teamLink}>Team</FooterLink>
              <FooterLink to={serviceLink}>Services</FooterLink>
              <FooterLink to={portfolioLink} style={{ marginLeft: "18px" }}>
                Portfolio
              </FooterLink>
              <FooterLink to={contactLink}>Contact</FooterLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FooterTitle sx={{ mb: 4, mt: { xs: 4, sm: 0 } }}>
              Socials
            </FooterTitle>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3.5}
              mb={5}
            >
              {logo(TwitterIcon, twitterLink)}
              {logo(InstagramIcon, instagramLink)}
              {logo(BehanceIcon, behanceLink)}
            </Stack>
            <Stack direction="row" justifyContent="center">
              <ContactButton onClick={() => navigate(contactLink)}>
                Contact Us
              </ContactButton>
            </Stack>
          </Grid>
        </Grid>
      </InnerWrapper>
    </OuterWrapper>
  );

  function logo(icon, link) {
    return (
      <IconButton
        component="a"
        href={link}
        target="_blank"
        style={{ color: "#000" }}
      >
        <Box component="img" src={icon} alt="" sx={{ width: 33, height: 33 }} />
      </IconButton>
    );
  }
}

export default Footer;
