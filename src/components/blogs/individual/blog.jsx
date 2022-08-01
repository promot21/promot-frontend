import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { InnerWrapper, OuterWrapper } from "../../wrapper/wrapper";
import {
  Conclusion,
  Paragraph,
  Point,
  Subtitle,
  Timestamp,
  Title,
} from "./blog.components";
import { CircularProgress } from "@mui/material";
import { getBlogDetails } from "../../../services/apiFunctions/blogs";
import { useLocation } from "react-router-dom";

function IndividualBlog() {
  // const blogID = window.location.pathname.split("/")[2];
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    var blogID;
    // console.log(location.state);
    if (location.state?.blogID) blogID = location.state.blogID;
    getDetails(blogID);
  }, []);

  async function getDetails(blogID) {
    await getBlogDetails(blogID)
      .then((response) => {
        const data = response.data;
        if (data) setBlogDetails(data);
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
        {Object.keys(blogDetails).length !== 0 ? (
          <>
            <Title>{blogDetails.title}</Title>
            <Subtitle>{blogDetails.subTitle}</Subtitle>
            <Box
              component="img"
              src={blogDetails.image}
              alt=""
              sx={{ width: "100%", my: 5 }}
            />
            {blogDetails.paragraphs.map((paragraph, index) => {
              return <Paragraph>{paragraph}</Paragraph>;
            })}
            <Box component="ul">
              {blogDetails.points.map((eachPoint, index) => {
                return <Point component="li">{eachPoint}</Point>;
              })}
            </Box>
            <Conclusion>{blogDetails.conclusion}</Conclusion>
            <Timestamp>
              Published On <strong>{formateDate(blogDetails.createdAt)}</strong>
            </Timestamp>
          </>
        ) : loaded ? (
          <Typography sx={{ fontSize: 28, textAlign: "center" }}>
            Blog details not found
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

export default IndividualBlog;
