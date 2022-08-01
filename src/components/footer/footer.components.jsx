import styled from "styled-components";
import { Typography, ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";

export const FooterLink = styled(Link)`
  && {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    text-decoration: none;
    color: #000000;
    text-align: center;
    width: 100%;
  }
`;

export const FooterTitle = styled(Typography)`
  && {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    color: #555;
    text-align: center;
  }
`;

export const ContactButton = styled(ButtonBase)`
  && {
    width: 145px;
    height: 53px;
    background: #000000;
    border-radius: 15px;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
  }
`;
