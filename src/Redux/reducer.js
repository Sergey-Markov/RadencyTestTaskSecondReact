import { allDates } from "../utils/allDates.js";
import {
  ADD_NOTE,
  ADD_NOTE_TO_ARCHIVE,
  CHANGE_NOTE,
  DELETE_ALL_NOTES,
  DELETE_NOTE,
} from "./actions-types";

const INITIAL_STATE = {
  notes: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case CHANGE_NOTE:
      state.notes.map((note) => {
        const myNote = note.id === action.payload.id;
        if (myNote) {
          note.text = action.payload.text;
          note.allDatesFromText = allDates(action.payload.text);
        }
      });
      return {
        ...state,
        notes: [...state.notes],
      };

    case ADD_NOTE_TO_ARCHIVE:
      state.notes.map((note) => {
        const myNote = note.id === action.payload.id;
        if (myNote) {
          if (note.archived) {
            note.archived = false;
            return;
          }
          if (note.archived === false) {
            note.archived = true;
            return;
          }
        }
        return;
      });
      return {
        ...state,
        notes: [...state.notes],
      };

    case DELETE_NOTE:
      const deleteNote = state.notes.filter((note) => {
        return note.id !== action.payload.id;
      });
      console.log(deleteNote);
      return {
        notes: [...deleteNote],
      };

    case DELETE_ALL_NOTES:
      return {
        ...state,
        notes: [],
      };

    default:
      return state;
  }
};
