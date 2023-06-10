import axios from "axios";
import { BASE_API } from "../../globals/constants";
const login = async (result) => {
  try {
    return await axios({
      method: "get",
      url: BASE_API + "/azure-login",
      headers: {
        "Ms-Authorization": result.accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const homeService = {
  login,
};
