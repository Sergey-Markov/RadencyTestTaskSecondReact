import axios from "axios";

const BASE_URL = "https://list-nodes.herokuapp.com/notes";
export const addNoteApi = (newNote) => {
  return function (dispatch) {
    return axios
      .post(BASE_URL, newNote)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
