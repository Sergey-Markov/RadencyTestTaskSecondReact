import ArchiveNoteBtn from "../Buttons/ArchiveNoteBtn/ArchiveNoteBtn.js";
import ChangeNoteBtn from "../Buttons/ChangeNoteBtn/ChangeNoteBtn.js";
import DeleteBtn from "../Buttons/DeleteBtn/DeleteBtn";
import { useDispatch, useSelector } from "react-redux";
import s from "./Notes.module.css";
import { deleteNote } from "../../Redux/actions.js";

export default function Notes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  return (
    <>
      {notes.map((note) => {
        return (
          <tr key={note.id} className="notes_table-head">
            <td className={s.notes_table_word_wrap}>{note.nameOfNote}</td>
            <td>{note.date}</td>
            <td>{note.category}</td>
            <td className={s.notes_table_word_wrap}>{note.text}</td>
            <td>{note.allDatesFromText}</td>
            <td>
              <ChangeNoteBtn />
            </td>
            <td>
              <ArchiveNoteBtn />
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
