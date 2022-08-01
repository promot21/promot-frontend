import styled from "styled-components";
import { Stack, Typography } from "@mui/material";

export const MenuContainer = styled(Stack)`
  && {
    position: absolute;
    top: 4.4rem;
    right: -24px;
    padding: 30px 0px;
    z-index: 2;
    background-color: #f9f9f9;
  }
`;

export const NavLink = styled(Typography)`
  && {
    font-family: Manrope;
    font-weight: 400;
    font-size: 15px;
    padding-left: 7%;

    width: 93%;
    text-decoration: none;
    color: #000000;
  }
`;
