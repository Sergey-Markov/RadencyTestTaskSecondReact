import {
  ADD_NOTE,
  ADD_NOTE_TO_ARCHIVE,
  CHANGE_NOTE,
  DELETE_NOTE,
} from "./actions-types";

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
    case CHANGE_NOTE:
      state.notes.map((note) => {
        const myNote = note.id === action.payload.id;
        if (myNote) {
          note.text = action.payload.text;
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
          note.archived = true;
        }
        console.log(note);
      });
      return {
        ...state,
        notes: [...state.notes],
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
