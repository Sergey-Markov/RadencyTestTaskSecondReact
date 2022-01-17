import ArchiveNoteBtn from "../Buttons/ArchiveNoteBtn/ArchiveNoteBtn.js";
import ChangeNoteBtn from "../Buttons/ChangeNoteBtn/ChangeNoteBtn.js";
import DeleteBtn from "../Buttons/DeleteBtn/DeleteBtn";
import { useSelector } from "react-redux";

export default function Notes() {
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  return (
    <>
      {notes.map((note) => {
        return (
          <tr key={note.id} className="notes_table-head">
            <td className="notes_table-word_wrap">{note.nameOfNote}</td>
            <td>{note.date}</td>
            <td>{note.category}</td>
            <td className="note_table-word_wrap">{note.text}</td>
            <td>{note.allDatesFromText}</td>
            <td>
              <ChangeNoteBtn />
            </td>
            <td>
              <ArchiveNoteBtn />
            </td>
            <td>
              <DeleteBtn />
            </td>
          </tr>
        );
      })}
    </>
  );
}
