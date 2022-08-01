import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import {
  ImageContainer,
  LoadButton,
  ProjectImage,
  ProjectsContainer,
  Title,
} from "./projects.components";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { portfolioLink } from "../../../common/routes";

function Projects({ projects, getAllProjects }) {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  var currentProjectCount = 0;

  return (
    <Box mb={20}>
      <Title sx={{ mt: { xs: "50px", sm: "140px" }, mb: "75px" }}>
        We are Promot
        <br />
        Your digital promotion one stop shop.
      </Title>

      <ProjectsContainer
        sx={{ mx: { sm: "auto" }, width: { sm: "80%" }, p: { xs: 2, sm: 0 } }}
      >
        {!loaded && projects.length !== 0 ? (
          <CircularProgress
            color="secondary"
            sx={{ m: "auto", display: "block" }}
          />
        ) : (
          ""
        )}
        {projects.length !== 0
          ? projects.map((data, index) => {
              return (
                <ImageContainer
                  onClick={() =>
                    navigate(`${portfolioLink}/${data.url}`, {
                      state: { projectID: data.projectID },
                    })
                  }
                >
                  <ProjectImage
                    component="img"
                    src={data.image}
                    alt=""
                    onLoad={() => {
                      if (index === 0) setLoaded(true);
                    }}
                  />
                </ImageContainer>
              );
            })
          : ""}
      </ProjectsContainer>
      {/* {projects.length !== 0 ? (
        <Stack direction="row" justifyContent="center">
          <LoadButton
            onClick={() => {
              currentProjectCount += projects.length;
              getAllProjects(currentProjectCount);
            }}
          >
            Load More
          </LoadButton>
        </Stack>
      ) : (
        ""
      )} */}
    </Box>
  );
}

export default Projects;
