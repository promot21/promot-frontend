import React, { Fragment, useEffect, useState } from "react";
import BlogUpload from "../../components/admin/blogs/uploadBlog";
import BlogDetailsUpload from "../../components/admin/blogs/uploadBlogDetails";
import bcrypt from "bcryptjs";
import { adminLink } from "../../common/routes";
import { useNavigate } from "react-router-dom";
import { getBlogToEdit } from "../../services/admin";

function AdminBlogPage() {
  const navigate = useNavigate();
  const originalPassword = "pR0mO+e_@Dm!9";
  const salt = "$2a$09$qa7FJIyK31D8nJjQD4EHpO";
  const blogID = window.location.pathname.split("/")[3];
  const [blogData, setBlogData] = useState();
  const [blogDetailsData, setBlogDetailsData] = useState();

  useEffect(() => {
    const savedPassword = localStorage.getItem("promot");
    let originalHashedPassword = bcrypt.hashSync(originalPassword, salt);
    if (savedPassword !== originalHashedPassword) navigate(adminLink);
    else if (blogID) getBlogData();
  }, []);

  return (
    <Fragment>
      <BlogUpload editableData={blogData} />
      <BlogDetailsUpload editableData={blogDetailsData} />
    </Fragment>
  );

  async function getBlogData() {
    await getBlogToEdit(blogID)
      .then((responses) => {
        // console.log(responses);
        if (responses) {
          setBlogData(responses[0].data.data);
          setBlogDetailsData(responses[1].data.data);
        }
      })
      .catch((error) => console.log(error));
  }
}

export default AdminBlogPage;
