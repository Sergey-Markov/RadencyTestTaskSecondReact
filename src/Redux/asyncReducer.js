import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllApi } from "../middlewares/getAllApi";

const INITIAL_STATE = {
  notes: [],
  status: null,
  error: null,
};
export const getAllNotesThunk = createAsyncThunk(
  `notes/getAll`,
  async function (_, { rejectWithValue }) {
    try {
      const response = await getAllApi();

      if (!response.status === 200) {
        throw new Error(response.data);
      }
      return response.data.notes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteNoteThunk = createAsyncThunk(
  "notes/deleteNote",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://list-nodes.herokuapp.com/notes/${id}`,
        { method: `DELETE` }
      );
      if (!response.ok) {
        throw new Error(response.data);
      }
      dispatch(getAllNotesThunk());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createNoteThunk = createAsyncThunk(
  `note/create`,
  async function (newNote, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch("https://list-nodes.herokuapp.com/notes", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(newNote),
      });
      if (!response.ok) {
        throw new Error(response.data);
      }

      dispatch(getAllNotesThunk());
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const changeNoteStatusThunk = createAsyncThunk(
  `note/status`,
  async function (id, { rejectWithValue, dispatch, getState }) {
    const note = getState().notes.find((note) => {
      return note._id === id;
    });
    const bool = note.archived;
    const newNote = {
      archived: !bool,
    };
    try {
      const response = await fetch(
        `https://list-nodes.herokuapp.com/notes/${id}`,
        {
          headers: { "Content-Type": "application/json" },
          method: "PATCH",
          body: JSON.stringify(newNote),
        }
      );
      if (!response.ok) {
        throw new Error(response.data);
      }
      dispatch(getAllNotesThunk());
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeNoteContentThunk = createAsyncThunk(
  `note/status`,
  async function (id, { rejectWithValue, dispatch }) {
    const elChange = document.getElementById(id);
    elChange.insertAdjacentHTML(
      "afterend",
      `<button type="button" class="btn-primary" id="btnSubmitChange">Submit</button>`
    );
    elChange.setAttribute("contentEditable", "true");
    elChange.focus({ preventScroll: true });
    const btnSubmitChange = document.getElementById("btnSubmitChange");
    btnSubmitChange.addEventListener("click", async (event) => {
      elChange.setAttribute("contentEditable", "false");
      const newNote = {
        content: elChange.textContent,
      };

      try {
        const response = await fetch(
          `https://list-nodes.herokuapp.com/notes/${id}`,
          {
            headers: { "Content-Type": "application/json" },
            method: "PATCH",
            body: JSON.stringify(newNote),
          }
        );
        if (!response.ok) {
          throw new Error(response.data);
        }
        dispatch(getAllNotesThunk());
      } catch (error) {
        return rejectWithValue(error);
      }

      btnSubmitChange.remove();
      event.stopPropagation();
    });
  }
);

export const deleteAllNoteThunk = createAsyncThunk(
  "notes/deleteAllNote",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://list-nodes.herokuapp.com/notes/deleteall`,
        { method: `DELETE` }
      );
      if (!response.ok) {
        throw new Error(response.data);
      }
      dispatch(getAllNotesThunk());
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "error";
  state.error = action.payload;
};
export const slice = createSlice({
  name: "notes",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getAllNotesThunk.pending]: (state, action) => {
      state.status = `loading`;
      state.error = null;
    },
    [getAllNotesThunk.fulfilled]: (state, action) => {
      state.status = `resolved`;
      state.notes = action.payload;
    },
    [getAllNotesThunk.rejected]: setError,
    [deleteNoteThunk.rejected]: setError,
    [createNoteThunk.rejected]: setError,
    [changeNoteStatusThunk.rejected]: setError,
    [changeNoteContentThunk.rejected]: setError,
    [deleteAllNoteThunk.rejected]: setError,
  },
});

export default slice.reducer;
