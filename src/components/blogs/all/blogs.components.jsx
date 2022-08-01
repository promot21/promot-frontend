import styled from "styled-components";
import { Box, ButtonBase, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ReadMore = styled(ButtonBase)`
  && {
    font-family: Manrope;
    // color: #323131;
    font-size: 15px;
    text-decoration: none;
  }
`;

export const Title = styled(Typography)`
  && {
    font-family: Manrope;
    color: #323131;
    font-size: 28px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Description = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: 10px;
    line-height: 25px;
    color: #52565f;
  }
`;

export const Timestamp = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    color: #292828;
    margin-bottom: 16px;
  }
`;

export const Thumbnail = styled(Box)`
  && {
    width: 215px;
    height: 200px;
  }
`;
