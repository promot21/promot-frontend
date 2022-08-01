import styled from "styled-components";
import { Box, ButtonBase, Typography } from "@mui/material";

export const Container = styled(Box)`
  && {
    margin: auto;
    margin-bottom: 150px;
  }
`;

export const Title = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
  }
`;

export const Description = styled(Typography)`
  && {
    font-family: Manrope;
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 37px;
    color: #000000;
  }
`;

export const KnowMoreButtom = styled(ButtonBase)`
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
    text-align: center;
    color: #ffffff;
  }
`;

export const AboutImage = styled(Box)`
  && {
    width: 325px;
    height: 375px;
    border-radius: 30px;
    border: none;
  }
`;
