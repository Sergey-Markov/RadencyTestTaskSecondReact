import axios from "axios";
const BASE_URL = "https://list-nodes.herokuapp.com/notes";

export const getAllApi = async () => {
  return await axios.get(`${BASE_URL}`).then(function (response) {
    return response;
  });
};
