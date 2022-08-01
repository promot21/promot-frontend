import styled from "styled-components";
import { Box } from "@mui/material";

export const OuterWrapper = styled(Box)`
  width: 100%;
`;

export const InnerWrapper = styled(Box)`
  max-width: 1300px;
  margin: 0px auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
