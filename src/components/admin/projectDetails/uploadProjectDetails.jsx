import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  ButtonBase,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ImageUpload from "./imageUpload";
import { FiPlus, FiMinus } from "react-icons/fi";
import { saveProjectDetails } from "../../../services/admin";

function ProjectDetailsUpload({ editableData }) {
  var [imageValues, setImageValues] = useState([""]);
  var [projectID, setProjectID] = useState("");
  const [hasUploaded, setHasUploaded] = useState(false);
  const [hasNotUploaded, setHasNotUploaded] = useState(false);

  const handleClose = () => {
    setHasUploaded(false);
    setHasNotUploaded(false);
  };

  useEffect(() => {
    // console.log(editableData);
    if (editableData) {
      setImageValues(editableData.imageUrls);
      setProjectID(window.location.pathname.split("/")[3]);
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
          Project Details Saved Successfully.
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
          <strong>Error!</strong> Can not save the project details.
        </Alert>
      </Snackbar>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}
        sx={{ width: "40%", mx: "auto", my: 6 }}
      >
        <Typography mb={1} sx={{ mx: "auto", fontSize: 25 }}>
          UPLOAD PROJECT DETAILS
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Typography mb={1} sx={{ mx: "auto", fontSize: 18 }}>
            Enter Project ID
          </Typography>
          <TextField
            fullWidth
            required
            label="Project ID"
            variant="outlined"
            value={projectID}
            onChange={(e) => setProjectID(e.target.value)}
          />
        </Box>

        <Box>
          <Stack direction="row" alignItems="center" spacing={1} mb={1.5}>
            <Typography sx={{ fontSize: 18 }}>Project Images</Typography>
            <ButtonBase
              onClick={() => {
                setImageValues((prev) => [...prev, [""]]);
              }}
            >
              <FiPlus
                style={{
                  fontSize: "17px",
                  background: "#017efa",
                  borderRadius: "5px",
                  color: "white",
                  padding: "2px",
                }}
              />
            </ButtonBase>
          </Stack>
          {imageValues.map((eachImage, index) => {
            return (
              <Box sx={{ width: "100%", mb: 2.5 }}>
                <ImageUpload
                  imageValues={imageValues}
                  setImageValues={setImageValues}
                  index={index}
                />

                {imageValues.length > 1 ? (
                  <ButtonBase
                    sx={{ mt: 1 }}
                    onClick={() => {
                      setImageValues((prev) => {
                        prev.splice(index, 1);
                        return [...prev];
                      });
                    }}
                  >
                    <FiMinus
                      style={{
                        fontSize: "17px",
                        background: "#017efa",
                        borderRadius: "5px",
                        color: "white",
                        padding: "2px",
                      }}
                    />
                  </ButtonBase>
                ) : (
                  ""
                )}
              </Box>
            );
          })}
        </Box>

        <Button
          disabled={imageValues[0] && projectID ? false : true}
          variant="contained"
          color="error"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </Fragment>
  );

  async function handleSubmit() {
    console.log(projectID, imageValues);
    await saveProjectDetails({
      projectID: projectID,
      imageUrls: imageValues,
    })
      .then((response) => {
        if (response.status === 200) {
          setHasUploaded(true);
          setImageValues([""]);
          setProjectID("");
        } else {
          setHasNotUploaded(true);
        }
      })
      .catch((error) => console.log(error));
  }
}

export default ProjectDetailsUpload;
