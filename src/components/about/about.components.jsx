import styled from "styled-components";
import { Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const Title = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 30px;
    line-height: 39px;
    font-weight: 500;
    color: #484848;
  }
`;

export const Description = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 15px;
    line-height: 27px;
    font-weight: 400;
    color: #484848;
  }
`;

export const BulletIcon = styled(FiberManualRecordIcon)`
  && {
    font-size: 0.5em;
    color: #484848;
  }
`;

export const DateText = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 15px;
    color: blue;
  }
`;

export const Timeline = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 15px;
    color: #484848;
  }
`;
