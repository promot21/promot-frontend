import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const Title = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 30px;
    line-height: 39px;
    font-weight: 400;
    color: #484848;
    margin-bottom: 50px;
  }
`;

export const ImageContainer = styled(Box)`
  && {
    display: block;
    width: 285px;
    height: 285px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }
`;

export const Thumbnail = styled(Box)`
  && {
    width: 100%;
    height: 100%;
    // &:hover {
    //   transition: all 0.4s ease;
    //   transform: scale(1.025);
    // };
  }
`;

export const ProjectName = styled(Typography)`
  && {
    position: absolute;
    z-index: 5;
    top: 45%;
    text-align: center;
    width: 100%;
    color: white;
    font-family: Manrope;
    font-size: 20px;
  }
`;
