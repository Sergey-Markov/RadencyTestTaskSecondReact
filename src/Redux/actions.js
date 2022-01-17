import { ADD_NOTE, DELETE_NOTE } from "./actions-types";

export function addNote({
  id,
  nameOfNote,
  date,
  category,
  text,
  allDatesFromText,
}) {
  return {
    type: ADD_NOTE,
    payload: {
      id,
      nameOfNote,
      date,
      category,
      text,
      allDatesFromText,
    },
  };
}
export function deleteNote(id) {
  return { type: DELETE_NOTE, payload: { id } };
}
