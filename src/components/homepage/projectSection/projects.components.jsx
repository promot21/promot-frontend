import styled from "styled-components";
import { Box, ButtonBase, Typography } from "@mui/material";

export const Title = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 31px;
    line-height: 39px;
    text-align: center;
    color: #3a3a3a;
    font-weight: ${(props) => props.highlighWt || "400"};
    font-style: ${(props) => props.highlightStl || "normal"};
  }
`;

export const ProjectsContainer = styled(Box)`
  && {
    margin-top: 35px;
    margin-bottom: 35px;
  }
`;

export const ImageContainer = styled(Box)`
  && {
    display: inline-flex;
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
  }
`;

export const ProjectImage = styled(Box)`
  width: 100%;
  height: 100%;
  &:hover {
    transition: all 0.4s ease;
    transform: scale(1.05);
  }
`;

export const LoadButton = styled(ButtonBase)`
  && {
    font-family: Manrope;
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 15px;
    &:hover {
      color: blue;
    }
  }
`;
