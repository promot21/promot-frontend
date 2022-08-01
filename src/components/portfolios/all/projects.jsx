import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../../../services/apiFunctions/projects";
import { InnerWrapper, OuterWrapper } from "../../wrapper/wrapper";
import {
  ImageContainer,
  ProjectName,
  Thumbnail,
  Title,
} from "./projects.components";
import { CircularProgress } from "@mui/material";
import { portfolioLink } from "../../../common/routes";
import "./projects.css";

function AllProjects() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    getAllProjects();
  }, []);

  async function getAllProjects() {
    const limit = 0,
      skip = 0;
    await getProjects(limit, skip)
      .then((response) => {
        const data = response.data.data;
        if (data) {
          //   console.log(response.data.data);
          setProjects(data);
        } else {
          setLoaded(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoaded(true);
      });
  }

  return (
    <OuterWrapper>
      <InnerWrapper
        sx={{
          width: { xs: "90%", sm: "70%;" },
          my: { xs: 5, sm: 15 },
        }}
      >
        <Title>Portfolio</Title>
        {!loaded && projects.length !== 0 ? (
          <CircularProgress
            color="secondary"
            sx={{ m: "auto", display: "block" }}
          />
        ) : (
          ""
        )}
        <Grid container>
          {projects.length !== 0
            ? projects.map((data, index) => {
                return (
                  <Grid item xs={12} sm={4} mb={4}>
                    <ImageContainer
                      className="hovered"
                      onClick={() =>
                        navigate(`${portfolioLink}/${data.url}`, {
                          state: { projectID: data.projectID },
                        })
                      }
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {hoveredIndex === index ? (
                        <ProjectName>{data.title}</ProjectName>
                      ) : (
                        ""
                      )}
                      <Thumbnail
                        component="img"
                        src={data.image}
                        alt=""
                        onLoad={() => {
                          if (index === 0) setLoaded(true);
                        }}
                      />
                    </ImageContainer>
                  </Grid>
                );
              })
            : loaded
            ? "Projects not found"
            : ""}
        </Grid>
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default AllProjects;
