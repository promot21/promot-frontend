import React, { Fragment, useEffect, useState } from "react";
import { getProjects } from "../../services/apiFunctions/projects";
import { getBlogs } from "../../services/apiFunctions/blogs";
import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { CircularProgress } from "@mui/material";
import {
  adminBlogLink,
  adminLink,
  adminProjectLink,
} from "../../common/routes";
import { useNavigate } from "react-router-dom";

function AdminDashboardPage() {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProjects();
    getAllBlogs();
  }, []);

  async function getAllProjects() {
    const limit = 0,
      skip = 0;
    await getProjects(limit, skip)
      .then((response) => {
        const data = response.data.data;
        //   console.log(response.data.data);
        if (data) setProjects(data);
      })
      .catch((error) => console.log(error));
  }
  async function getAllBlogs() {
    await getBlogs()
      .then((response) => {
        // console.log(response.data.data);
        var data = response.data.data;
        if (data.length !== 0) setBlogs(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Fragment>
      <Typography
        sx={{ fontSize: "32px", fontWeight: 700, textAlign: "center", my: 2 }}
      >
        Dashboard
      </Typography>
      <Divider />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ width: { xs: "90%", sm: "50%" }, mx: "auto", mt: 5 }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            maxHeight: 500,
            overflow: "auto",
            mb: { xs: 3, sm: 0 },
          }}
        >
          <Stack direction="row" spacing={2}>
            <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
              Projects
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate(`${adminLink}/${adminProjectLink}`)}
            >
              New Project
            </Button>
          </Stack>
          <List component="nav">
            {projects.length !== 0 ? (
              projects.map((project) => {
                return (
                  <ListItemButton
                    onClick={() =>
                      navigate(
                        `${adminLink}/${adminProjectLink}/${project.projectID}`
                      )
                    }
                  >
                    <ListItemText primary={project.title} />
                  </ListItemButton>
                );
              })
            ) : (
              <CircularProgress
                color="secondary"
                sx={{ m: "auto", display: "block" }}
              />
            )}
          </List>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            maxHeight: 500,
            overflow: "auto",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
              Blogs
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate(`${adminLink}/${adminBlogLink}`)}
            >
              New Blog
            </Button>
          </Stack>
          <List component="nav">
            {blogs.length !== 0 ? (
              blogs.map((blog) => {
                return (
                  <ListItemButton
                    onClick={() =>
                      navigate(`${adminLink}/${adminBlogLink}/${blog.blogID}`)
                    }
                  >
                    <ListItemText primary={blog.title} />
                  </ListItemButton>
                );
              })
            ) : (
              <CircularProgress
                color="secondary"
                sx={{ m: "auto", display: "block" }}
              />
            )}
          </List>
        </Box>
      </Stack>
    </Fragment>
  );
}

export default AdminDashboardPage;
