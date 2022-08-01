import axios from "axios";
import { getAllBlogsRoute, getBlogDetailsRoute } from "../../common/endpoints";

export const getBlogs = async () => {
  try {
    const response = await axios.get(getAllBlogsRoute);
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export const getBlogDetails = async (blogID) => {
  const config = {
    method: "get",
    url: `${getBlogDetailsRoute}?blogID=${blogID}`,
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
