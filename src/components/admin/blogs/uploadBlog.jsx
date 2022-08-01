import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Popover,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ImageUpload from "../imageUpload";
import { saveBlog } from "../../../services/admin";

function BlogUpload({ editableData }) {
  console.log(editableData);
  const [hasUploaded, setHasUploaded] = useState(false);
  const [hasNotUploaded, setHasNotUploaded] = useState(false);
  const [blogID, setBlogID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [url, setUrl] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setHasUploaded(false);
    setHasNotUploaded(false);
  };

  useEffect(() => {
    // console.log(editableData);
    if (editableData) {
      setImageValue(editableData.thumbnail);
      setTitle(editableData.title);
      setDescription(editableData.description);
      setBlogID(editableData.blogID);
      setUrl(editableData.url);
    }
  }, [editableData]);

  return (
    <Fragment>
      <Snackbar
        open={hasUploaded}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Blog Saved Successfully.
        </Alert>
      </Snackbar>
      <Snackbar
        open={hasNotUploaded}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          <strong>Error!</strong> Can not save the Blog.
        </Alert>
      </Snackbar>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}
        sx={{ width: "40%", mx: "auto", mt: 6 }}
      >
        <Typography mb={1} sx={{ mx: "auto", fontSize: "25px" }}>
          UPLOAD A NEW BLOG
        </Typography>
        <ImageUpload
          titleLabel="Blog Thumbnail Image"
          value={imageValue}
          setValue={setImageValue}
          imageID="blog-thumbnail"
        />
        <TextField
          fullWidth
          required
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          required
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          fullWidth
          required
          label="Blog Url"
          variant="outlined"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          disabled={imageValue ? false : true}
          variant="contained"
          color="error"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {blogID ? <CopyBlogID /> : ""}
      </Stack>
    </Fragment>
  );

  function CopyBlogID() {
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Fragment>
        <Tooltip title="Copy">
          <Button
            onClick={(e) => {
              navigator.clipboard.writeText(blogID);
              setAnchorEl(e.currentTarget);
            }}
          >
            <strong>Blog ID -</strong> &nbsp; {blogID}
          </Button>
        </Tooltip>

        <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
          <Typography sx={{ px: 2, py: 1, fontSize: 14 }}>Copied</Typography>
        </Popover>
      </Fragment>
    );
  }

  async function handleSubmit() {
    await saveBlog({
      thumbnail: imageValue,
      title: title,
      description: description,
      blogID: blogID,
      url: url,
    })
      .then((response) => {
        if (response.status === 200) {
          setBlogID(response.data.data.blogID);
          setHasUploaded(true);
          setImageValue("");
          setTitle("");
          setDescription("");
          setUrl("");
        } else {
          setHasNotUploaded(true);
        }
      })
      .catch((error) => console.log(error));
  }
}

export default BlogUpload;
