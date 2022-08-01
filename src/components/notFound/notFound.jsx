import React from "react";
import { Stack, Typography } from "@mui/material";

function NotFound() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ height: "75vh" }}
    >
      <Typography
        sx={{ fontSize: "40px", fontFamily: "Manrope", color: "#484848" }}
      >
        Error 404!
      </Typography>
      <Typography
        sx={{ fontSize: "30px", fontFamily: "Manrope", color: "#484848" }}
      >
        Page Not Found.
      </Typography>
    </Stack>
  );
}

export default NotFound;
