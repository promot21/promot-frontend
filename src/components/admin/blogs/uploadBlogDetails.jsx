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
import ImageUpload from "../imageUpload";
import { FiPlus, FiMinus } from "react-icons/fi";
import { saveBlogDetails } from "../../../services/admin";

function BlogDetailsUpload({ editableData }) {
  var [imageValue, setImageValue] = useState("");
  var [blogID, setBlogID] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [paragraphs, setParagraphs] = useState([""]);
  const [points, setPoints] = useState([""]);
  const [conclusion, setConclusion] = useState("");
  const [hasUploaded, setHasUploaded] = useState(false);
  const [hasNotUploaded, setHasNotUploaded] = useState(false);

  const handleClose = () => {
    setHasUploaded(false);
    setHasNotUploaded(false);
  };

  useEffect(() => {
    // console.log(editableData);
    if (editableData) {
      setBlogID(editableData.blogID);
      setTitle(editableData.title);
      setSubTitle(editableData.subTitle);
      setParagraphs(editableData.paragraphs);
      setImageValue(editableData.image);
      setPoints(editableData.points);
      setConclusion(editableData.conclusion);
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
          Blog Details Saved Successfully.
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
          <strong>Error!</strong> Can not save the blog details.
        </Alert>
      </Snackbar>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}
        sx={{ width: "40%", mx: "auto", my: 6 }}
      >
        <Typography mb={1} sx={{ mx: "auto", fontSize: "25px" }}>
          UPLOAD BLOG DETAILS
        </Typography>
        <ImageUpload
          titleLabel="Blog Image"
          value={imageValue}
          setValue={setImageValue}
          imageID="blog-details-image"
        />
        <TextField
          fullWidth
          required
          label="Blog Id"
          variant="outlined"
          value={blogID}
          onChange={(e) => setBlogID(e.target.value)}
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
          label="Subtitle"
          variant="outlined"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />

        <Box sx={{ width: "100%" }}>
          {paragraphs.map((para, index) => {
            return (
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ width: "100%", mb: 1 }}
              >
                <TextField
                  fullWidth
                  required
                  label={`Paragraph ${index + 1}`}
                  variant="outlined"
                  value={paragraphs[index]}
                  onChange={(e) =>
                    setParagraphs((prev) => {
                      prev[index] = e.target.value;
                      return [...prev];
                    })
                  }
                />
                {paragraphs.length > 1 ? (
                  <ButtonBase
                    onClick={() => {
                      setParagraphs((prev) => {
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
              </Stack>
            );
          })}
          <ButtonBase
            onClick={() => {
              setParagraphs((prev) => [...prev, ""]);
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
            <Typography ml={1}>Add paragraph</Typography>
          </ButtonBase>
        </Box>

        <Box sx={{ width: "100%" }}>
          {points.map((para, index) => {
            return (
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ width: "100%", mb: 1 }}
              >
                <TextField
                  fullWidth
                  required
                  label={`Bullet List Point ${index + 1}`}
                  variant="outlined"
                  value={points[index]}
                  onChange={(e) =>
                    setPoints((prev) => {
                      prev[index] = e.target.value;
                      return [...prev];
                    })
                  }
                />
                {points.length > 1 ? (
                  <ButtonBase
                    onClick={() => {
                      setPoints((prev) => {
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
              </Stack>
            );
          })}
          <ButtonBase
            onClick={() => {
              setPoints((prev) => [...prev, ""]);
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
            <Typography ml={1}>Add bullet list point</Typography>
          </ButtonBase>
        </Box>

        <TextField
          fullWidth
          required
          label="Conclusion"
          variant="outlined"
          value={conclusion}
          onChange={(e) => setConclusion(e.target.value)}
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
      </Stack>
    </Fragment>
  );

  async function handleSubmit() {
    await saveBlogDetails({
      blogID: blogID,
      title: title,
      subTitle: subTitle,
      paragraphs: paragraphs,
      image: imageValue,
      points: points,
      conclusion: conclusion,
    })
      .then((response) => {
        if (response.status === 200) {
          setHasUploaded(true);
          setBlogID("");
          setImageValue("");
          setTitle("");
          setSubTitle("");
          setParagraphs([""]);
          setPoints([""]);
          setConclusion("");
        } else {
          setHasNotUploaded(true);
        }
      })
      .catch((error) => console.log(error));
  }
}

export default BlogDetailsUpload;
