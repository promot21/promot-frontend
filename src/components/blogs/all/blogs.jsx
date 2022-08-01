import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { blogLink } from "../../../common/routes";
import {
  Description,
  ReadMore,
  Thumbnail,
  Timestamp,
  Title,
} from "./blogs.components";
import { InnerWrapper, OuterWrapper } from "../../wrapper/wrapper";
import { CircularProgress } from "@mui/material";
import { getBlogs } from "../../../services/apiFunctions/blogs";

function AllBlogs() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  async function getAllBlogs() {
    await getBlogs()
      .then((response) => {
        // console.log(response.data.data);
        var data = response.data.data;
        if (data.length !== 0) setBlogs(data);
        setLoaded(true);
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
          width: { xs: "90%", sm: "80%;" },
          my: { xs: 5, sm: 15 },
        }}
      >
        {!loaded ? (
          <CircularProgress
            color="secondary"
            sx={{ m: "auto", display: "block" }}
          />
        ) : (
          ""
        )}

        {blogs.length !== 0 ? (
          blogs.map((eachBlog, index) => {
            return (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                mt={6}
              >
                <Box sx={{ width: { xs: "100%", sm: "70%" } }}>
                  {/* <Title component={Link} to={`${blogLink}/${eachBlog.blogID}`}> */}
                  <Title
                    onClick={() =>
                      navigate(`${blogLink}/${eachBlog.url}`, {
                        state: { blogID: eachBlog.blogID },
                      })
                    }
                  >
                    {eachBlog.title}
                  </Title>
                  <Timestamp>
                    Published On{" "}
                    <strong>{formateDate(eachBlog.createdAt)}</strong>
                  </Timestamp>
                  <Description>{eachBlog.description}</Description>
                  {/* <ReadMore to={`${blogLink}/${eachBlog.blogID}`}> */}
                  <ReadMore
                    onClick={() =>
                      navigate(`${blogLink}/${eachBlog.url}`, {
                        state: { blogID: eachBlog.blogID },
                      })
                    }
                  >
                    Read More . . .
                  </ReadMore>
                </Box>
                <Thumbnail
                  component="img"
                  src={eachBlog.thumbnail}
                  alt=""
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
              </Stack>
            );
          })
        ) : loaded ? (
          <Typography sx={{ fontSize: 28, textAlign: "center" }}>
            Blogs not available
          </Typography>
        ) : (
          ""
        )}
      </InnerWrapper>
    </OuterWrapper>
  );

  function formateDate(date) {
    var formated = new Date(date).toLocaleString();
    formated = formated.split(",")[0];
    return formated;
  }
}

export default AllBlogs;
