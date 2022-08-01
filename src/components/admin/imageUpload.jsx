import React from "react";
import { Button, Link, Stack, Typography } from "@mui/material";
import { imageUploadfunc } from "../../services/admin";

function ImageUpload({ titleLabel, value, setValue, imageID }) {
  async function handleChange(e) {
    let formDataBanner = new FormData();

    formDataBanner.append("file", e.target.files[0]);
    var resp = await imageUploadfunc(formDataBanner);
    console.log(resp.url);
    setValue(resp.url);
  }

  return (
    <Stack>
      <Typography mb={1} sx={{ fontSize: 18 }}>
        {titleLabel}
      </Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <label htmlFor={imageID}>
          <input
            required
            accept="image/*"
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
            id={imageID}
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <Link href={value} target="_blank">
          {value}
        </Link>
      </Stack>
    </Stack>
  );
}

export default ImageUpload;
