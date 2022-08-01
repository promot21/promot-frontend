import styled from "styled-components";
import {
  ButtonBase,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

export const Title = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 25px;
  }
`;

export const Text = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    color: ${(props) => props.heading || "#4b4f58"};
  }
`;

export const InputLabel = styled(Typography)`
  && {
    font-family: Manrope;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    color: #4b4f58;
  }
`;

export const InputField = styled(TextField)`
  && {
    background: #fcfbfb;
    width: 100%;
    .MuiOutlinedInput-root {
      height: 47px;
    }
  }
`;

export const MessageInput = styled(TextareaAutosize)`
  && {
    border: 1px solid rgb(217, 181, 181);
    background: #fcfbfb;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 14px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled(ButtonBase)`
  && {
    width: 125px;
    height: 45px;
    background: #000000;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
  }
`;

export const DataInputField = (props) => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={0.5}
      mb={2.5}
    >
      <InputLabel>{props.label}*</InputLabel>
      <InputField
        required
        variant="outlined"
        type={props.type || "text"}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </Stack>
  );
};
