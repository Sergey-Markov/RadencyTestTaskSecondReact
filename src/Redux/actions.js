import {
  ADD_NOTE,
  ADD_NOTE_TO_ARCHIVE,
  CHANGE_NOTE,
  DELETE_ALL_NOTES,
  DELETE_NOTE,
} from "./actions-types";

export function addNote({
  id,
  nameOfNote,
  date,
  category,
  text,
  allDatesFromText,
  archived,
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
      archived,
    },
  };
}
export function changeNote(id, text) {
  return { type: CHANGE_NOTE, payload: { id, text } };
}

export function archivedNote(id) {
  return { type: ADD_NOTE_TO_ARCHIVE, payload: { id } };
}
export function deleteNote(id) {
  return { type: DELETE_NOTE, payload: { id } };
}

export function deleteAllNotes() {
  return { type: DELETE_ALL_NOTES };
}
