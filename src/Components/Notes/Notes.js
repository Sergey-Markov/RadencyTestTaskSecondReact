import ArchiveNoteBtn from "../Buttons/ArchiveNoteBtn/ArchiveNoteBtn.js";
import ChangeNoteBtn from "../Buttons/ChangeNoteBtn/ChangeNoteBtn.js";
import DeleteBtn from "../Buttons/DeleteBtn/DeleteBtn";
import { useDispatch, useSelector } from "react-redux";
import s from "./Notes.module.css";
import { сhooseImgCategory } from "../../utils/сhooseImgCategory.js";
import {
  changeNoteStatusThunk,
  deleteNoteThunk,
  changeNoteContentThunk,
} from "../../Redux/asyncReducer.js";

export default function Notes() {
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  return (
    <>
      {notes.map((note) => {
        if (note.archived) {
          return;
        }
        return (
          <tr key={note._id} className="notes_table-head">
            <td>{сhooseImgCategory(note.category)}</td>
            <td className={s.notes_table_word_wrap}>{note.name}</td>
            <td>{note.date}</td>
            <td>{note.category}</td>
            <td className={s.notes_table_word_wrap} id={note._id}>
              {note.content}
            </td>
            <td>{note.allDatesFromText}</td>
            <td>
              <ChangeNoteBtn
                onClick={(e) => {
                  dispatch(changeNoteContentThunk(note._id));
                }}
              />
            </td>
            <td>
              <ArchiveNoteBtn
                onClick={() => {
                  dispatch(changeNoteStatusThunk(note._id));
                }}
              />
            </td>
            <td>
              <DeleteBtn
                onClick={async () => {
                  dispatch(deleteNoteThunk(note._id));
                }}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
}
