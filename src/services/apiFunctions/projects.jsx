import axios from "axios";
import {
  getAllProjectsRoute,
  getProjectDetailsRoute,
} from "../../common/endpoints";

export const getProjects = async (limit, skip) => {
  const config = {
    method: "get",
    url: `${getAllProjectsRoute}?limitCount=${limit}&skipCount=${skip}`,
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

export const projectDetails = async (projectID) => {
  const config = {
    method: "get",
    url: `${getProjectDetailsRoute}?projectID=${projectID}`,
  };

  try {
    const response = await axios(config);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};
