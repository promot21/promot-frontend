import styled from "styled-components";
import { Box, IconButton, Typography } from "@mui/material";

export const Title = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 30px;
    line-height: 39px;
    font-weight: 400;
    color: #484848;
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const ImageContainer = styled(Box)`
  && {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`;

export const Name = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #333333;
    text-align: center;
    margin-top: 8px;
  }
`;

export const Designation = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    color: #333333;
    text-align: center;
    margin-top: 8px;
  }
`;

export const Description = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;
    color: #333333;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const SocialIcon = styled(IconButton)`
  && {
    background-color: ${(props) => props.customColor};
    width: 30px;
    height: 30px;
    color: white;
    &:hover {
      color: black;
    }
  }
`;
