import axios from "axios";
import { saveQueryRoute } from "../../common/endpoints";

export const saveUserQuery = async (queryData) => {
  const config = {
    method: "post",
    url: saveQueryRoute,
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(queryData),
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
