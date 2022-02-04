import axios from "axios";

// actions for async request:
/*
REQUEST
SUCCES
FAILURE
*/

const BASE_URL = "https://list-nodes.herokuapp.com/notes";
export const addNoteApi = (newNote) => {
  return function (dispatch) {
    return axios
      .post(BASE_URL, newNote)
      .then(function (response) {
        console.log(response);
        // dispatch({ type: "ADD_NOTE_SUCCES", payload: response.data });
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        // dispatch({ type: "ADD_NOTE_FAILURE", payload: error });
      });
  };
};
