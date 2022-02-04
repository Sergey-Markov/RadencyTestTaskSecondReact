import axios from "axios";
const BASE_URL = "https://list-nodes.herokuapp.com/notes";

export const deleteNoteApi = (id) => {
  console.log(id);

  return async function () {
    await axios.delete(`${BASE_URL}/${id}`).then((response) => {
      return response;
    });
  };
};
