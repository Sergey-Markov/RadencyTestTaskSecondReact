import ArchiveNoteBtn from "../Buttons/ArchiveNoteBtn/ArchiveNoteBtn.js";
import ChangeNoteBtn from "../Buttons/ChangeNoteBtn/ChangeNoteBtn.js";
import DeleteBtn from "../Buttons/DeleteBtn/DeleteBtn";
import { useDispatch, useSelector } from "react-redux";
import s from "./ArchiveNotes.module.css";
import { archivedNote, deleteNote } from "../../Redux/actions.js";
import { сhooseImgCategory } from "../../utils/сhooseImgCategory.js";
import { onChangeNoteBtn } from "../../utils/onChangeNoteBtn.js";

export default function Notes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <>
      {notes.map((note) => {
        if (!note.archived) {
          return;
        }
        return (
          <tr key={note.id} className="notes_table-head">
            <td>{сhooseImgCategory(note.category)}</td>
            <td className={s.notes_table_word_wrap}>{note.nameOfNote}</td>
            <td>{note.date}</td>
            <td>{note.category}</td>
            <td className={s.notes_table_word_wrap} id={note.id}>
              {note.text}
            </td>
            <td>{note.allDatesFromText}</td>
            <td>
              <ChangeNoteBtn
                onClick={(e) => {
                  onChangeNoteBtn(note.id, dispatch);
                }}
              />
            </td>
            <td>
              <ArchiveNoteBtn
                onClick={() => {
                  dispatch(archivedNote(note.id));
                }}
              />
            </td>
            <td>
              <DeleteBtn
                onClick={() => {
                  dispatch(deleteNote(note.id));
                }}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
}
