import axios from "axios";
import {
  getBlogByIdRoute,
  getBlogDetailsRoute,
  getProjectByIdRoute,
  getProjectDetailsRoute,
  imageUploadRoute,
  saveBlogDetailsRoute,
  saveNewBlogRoute,
  saveNewProjectRoute,
  saveProjectDetailsRoute,
} from "../common/endpoints";

export const imageUploadfunc = async (file) => {
  try {
    var response = await axios
      .post(imageUploadRoute, file, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .catch(function () {
        console.log("FAILURE!!");
      });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const saveProject = async (projectDetails) => {
  const config = {
    method: "post",
    url: saveNewProjectRoute,
    headers: { "Content-type": "application/json" },
    data: projectDetails,
  };

  try {
    const response = await axios(config);
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export const saveProjectDetails = async (projectDetails) => {
  const config = {
    method: "post",
    url: saveProjectDetailsRoute,
    headers: { "Content-type": "application/json" },
    data: projectDetails,
  };

  try {
    const response = await axios(config);
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export const saveBlog = async (blogData) => {
  const config = {
    method: "post",
    url: saveNewBlogRoute,
    headers: { "Content-type": "application/json" },
    data: blogData,
  };

  try {
    const response = await axios(config);
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export const saveBlogDetails = async (blogDetails) => {
  const config = {
    method: "post",
    url: saveBlogDetailsRoute,
    headers: { "Content-type": "application/json" },
    data: blogDetails,
  };

  try {
    const response = await axios(config);
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export const getProjectToEdit = async (projectID) => {
  const project = axios.get(`${getProjectByIdRoute}?projectID=${projectID}`);
  const projectDetails = axios.get(
    `${getProjectDetailsRoute}?projectID=${projectID}`
  );

  var dataToReturn;
  await axios
    .all([project, projectDetails])
    .then((responses) => (dataToReturn = responses))
    .catch((error) => console.log(error));

  return dataToReturn;
};

export const getBlogToEdit = async (blogID) => {
  const blog = axios.get(`${getBlogByIdRoute}?blogID=${blogID}`);
  const blogDetails = axios.get(`${getBlogDetailsRoute}?blogID=${blogID}`);

  var dataToReturn;
  await axios
    .all([blog, blogDetails])
    .then((responses) => (dataToReturn = responses))
    .catch((error) => console.log(error));

  return dataToReturn;
};
