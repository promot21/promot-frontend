import React, { Fragment, useState } from "react";
import { Box, Stack } from "@mui/material";
import { InnerWrapper } from "../../wrapper/wrapper";
import logo from "../../../images/logo.svg";
import {
  homeLink,
  blogLink,
  aboutLink,
  teamLink,
  contactLink,
  serviceLink,
  portfolioLink,
} from "../../../common/routes";
import { Link, useNavigate } from "react-router-dom";
import { Container, Line, MenuItem, NavLink } from "./navbar.components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MobileMenu from "../menu/menu";

function Navbar() {
  const navigate = useNavigate();
  const [diplayMenuItem, setDiplayMenuItem] = useState(false);

  return (
    <Container>
      <InnerWrapper sx={{ height: "100%" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%", px: { xs: 3, md: 6.5 } }}
        >
          <Box
            component="img"
            src={logo}
            sx={{ width: 180, cursor: "pointer" }}
            onClick={() => navigate(homeLink)}
          />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{ position: "relative", display: { xs: "none", sm: "flex" } }}
          >
            {NavItem(homeLink, "Home")}
            {NavItem(blogLink, "Blog")}
            {NavItem(aboutLink, "About")}
            {NavItem(teamLink, "Team")}
            {NavButton()}
            {NavItem(contactLink, "Contact")}
          </Stack>
          <Box sx={{ display: { xs: "inline", sm: "none" } }}>
            <MobileMenu />
          </Box>
        </Stack>
      </InnerWrapper>
      <Line bgColor="#FAAB4E" />
      <Line bgColor="#C7E7F2" />
      <Line bgColor="#97AAB1" />
    </Container>
  );

  function NavItem(url, text) {
    return (
      <NavLink component={Link} to={url}>
        {text}
      </NavLink>
    );
  }

  function NavButton() {
    return (
      <Fragment>
        <NavLink
          component={Link}
          to={serviceLink}
          onMouseEnter={() => setDiplayMenuItem(true)}
          onMouseLeave={() => setDiplayMenuItem(false)}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            Services
            <KeyboardArrowDownIcon sx={{ ml: 1, fontSize: "20px" }} />
          </Stack>
        </NavLink>
        {diplayMenuItem ? (
          <MenuItem
            component={Link}
            to={portfolioLink}
            onMouseEnter={() => setDiplayMenuItem(true)}
            onMouseLeave={() => setDiplayMenuItem(false)}
          >
            Portfolio
          </MenuItem>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default Navbar;
