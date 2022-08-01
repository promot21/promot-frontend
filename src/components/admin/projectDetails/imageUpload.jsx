import React from "react";
import { Button, Link, Stack } from "@mui/material";
import { imageUploadfunc } from "../../../services/admin";

function ImageUpload({ imageValues, setImageValues, index }) {
  async function handleChange(e) {
    let formDataBanner = new FormData();

    formDataBanner.append("file", e.target.files[0]);
    var resp = await imageUploadfunc(formDataBanner);
    console.log(resp.url);
    setImageValues((prev) => {
      prev[index] = resp.url;
      return [...prev];
    });
  }

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <label htmlFor={`project-images-${index}`}>
        <input
          required
          accept="image/*"
          type="file"
          onChange={handleChange}
          style={{ display: "none" }}
          id={`project-images-${index}`}
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <Link href={imageValues[index]} target="_blank">
        {imageValues[index]}
      </Link>
    </Stack>
  );
}

export default ImageUpload;
