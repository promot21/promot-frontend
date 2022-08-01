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
import { saveProject } from "../../../services/admin";

function ProjectUpload({ editableData }) {
  const [imageValue, setImageValue] = useState("");
  const [projectName, setProjectName] = useState("");
  const [hasUploaded, setHasUploaded] = useState(false);
  const [hasNotUploaded, setHasNotUploaded] = useState(false);
  const [projectID, setProjectID] = useState("");
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
      setImageValue(editableData.image);
      setProjectName(editableData.title);
      setProjectID(editableData.projectID);
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
          Project Saved Successfully.
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
          <strong>Error!</strong> Can not save the project.
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
          UPLOAD A NEW PROJECT
        </Typography>
        <ImageUpload
          titleLabel="Project Thumbnail Image"
          value={imageValue}
          setValue={setImageValue}
          imageID="project-thumbnail"
        />
        <TextField
          fullWidth
          required
          label="Project Name"
          variant="outlined"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <TextField
          fullWidth
          required
          label="Project Url"
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
        {projectID ? <CopyProjectID /> : ""}
      </Stack>
    </Fragment>
  );

  function CopyProjectID() {
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Fragment>
        <Tooltip title="Copy">
          <Button
            onClick={(e) => {
              navigator.clipboard.writeText(projectID);
              setAnchorEl(e.currentTarget);
            }}
          >
            <strong>Project ID -</strong> &nbsp; {projectID}
          </Button>
        </Tooltip>

        <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
          <Typography sx={{ px: 2, py: 1, fontSize: 14 }}>Copied</Typography>
        </Popover>
      </Fragment>
    );
  }

  async function handleSubmit() {
    await saveProject({
      image: imageValue,
      title: projectName,
      projectID: projectID,
      url: url,
    })
      .then((response) => {
        if (response.status === 200) {
          setProjectID(response.data.data.projectID);
          setHasUploaded(true);
          setImageValue("");
          setProjectName("");
          setUrl("");
        } else {
          setHasNotUploaded(true);
        }
      })
      .catch((error) => console.log(error));
  }
}

export default ProjectUpload;
