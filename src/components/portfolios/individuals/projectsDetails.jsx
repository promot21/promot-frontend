import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { projectDetails } from "../../../services/apiFunctions/projects";
import { useLocation } from "react-router-dom";

function ProjectsDetails() {
  // const projectID = window.location.pathname.split("/")[2];
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [portfolioImages, setPortfolioImages] = useState([]);

  useEffect(() => {
    var projectID;
    if (location.state?.projectID) projectID = location.state.projectID;
    getProjectDetails(projectID);
  }, []);

  async function getProjectDetails(projectID) {
    await projectDetails(projectID)
      .then((response) => {
        // console.log(response);
        const data = response.data.imageUrls;
        if (data) setPortfolioImages(data);
        else setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setLoaded(true);
      });
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        width: { xs: "90%", sm: "80%;" },
        my: { xs: 5, sm: 15 },
        mx: "auto",
      }}
    >
      {!loaded && portfolioImages.length !== 0 ? (
        <CircularProgress
          color="secondary"
          sx={{ m: "auto", display: "block" }}
        />
      ) : (
        ""
      )}
      {portfolioImages.length !== 0 ? (
        portfolioImages.map((imageUrl, index) => {
          return (
            <Box
              component="img"
              src={imageUrl}
              alt=""
              sx={{ width: "100%" }}
              onLoad={() => {
                if (index === 0) setLoaded(true);
              }}
            />
          );
        })
      ) : loaded ? (
        <Typography sx={{ fontSize: 28 }}>Project not Found</Typography>
      ) : (
        ""
      )}
    </Stack>
  );
}

export default ProjectsDetails;
