import { ADD_NOTE, DELETE_NOTE } from "./actions-types";

const INITIAL_STATE = {
  notes: [],
  archiveNotes: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      const deleteNote = state.notes.filter((note) => {
        return note.id !== action.payload.id;
      });
      return {
        ...state,
        notes: [...deleteNote],
      };

    default:
      return state;
  }
};
