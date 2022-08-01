import styled from "styled-components";
import { Divider, Typography } from "@mui/material";
import { OuterWrapper } from "../../wrapper/wrapper";
import HeaderBg from "../../../images/header.png";

export const Container = styled(OuterWrapper)`
  && {
    background-image: url(${HeaderBg});
    height: 100px;
  }
`;

export const NavLink = styled(Typography)`
  && {
    font-family: Manrope;
    font-weight: 400;
    font-size: 15px;
    padding-top: 35px;
    padding-bottom: 35px;

    text-decoration: none;
    color: #000000;
    &:hover {
      transition: all 0.3s ease;
      transform: scale(1.2);
    }
  }
`;

export const MenuItem = styled(Typography)`
  && {
    position: absolute;
    top: 4.75rem;
    right: -1rem;
    font-family: Manrope;
    font-weight: 400;
    font-size: 15px;
    margin: 0 !important;
    border-top: 2px solid #000;
    box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.1);
    background: #fff;
    width: 165px;
    text-decoration: navajowhite;
    color: black;
    padding: 13px 20px;
  }
`;

export const Line = styled(Divider)`
  && {
    height: 5px;
    border: none;
    background-color: ${(props) => props.bgColor};
  }
`;
