import ArchiveNoteBtn from "../Buttons/ArchiveNoteBtn/ArchiveNoteBtn.js";
import ChangeNoteBtn from "../Buttons/ChangeNoteBtn/ChangeNoteBtn.js";
import DeleteBtn from "../Buttons/DeleteBtn/DeleteBtn";
import { useDispatch, useSelector } from "react-redux";
import s from "./Notes.module.css";
import { archivedNote, changeNote, deleteNote } from "../../Redux/actions.js";

import { BsCart4, BsGear } from "react-icons/bs";

export default function Notes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  // let imgCategory = ``;
  // imgCategory = `<i class="bi bi-cart4 active"></i>`;
  // if (refs.inputCategoryOfNote.value === "Random Tought") {
  //   imgCategory = `<i class="bi bi-gear active"></i>`;
  // }

  // if (refs.inputCategoryOfNote.value === "Idea") {
  //   imgCategory = `<i class="bi bi-lightbulb active"></i>`;
  // }
  function сhooseImgCategory(category) {
    let imgCategory = <BsCart4 />;
    if (category === "Random Tought") {
      imgCategory = <BsGear />;
    }
  }

  function onChangeNoteBtn(id) {
    const elChange = document.getElementById(id);
    elChange.insertAdjacentHTML(
      "afterend",
      `<button type="button" class="btn-primary" id="btnSubmitChange">Submit</button>`
    );
    elChange.setAttribute("contentEditable", "true");
    elChange.focus({ preventScroll: true });
    const btnSubmitChange = document.getElementById("btnSubmitChange");
    btnSubmitChange.addEventListener("click", (event) => {
      elChange.setAttribute("contentEditable", "false");
      dispatch(changeNote(id, elChange.textContent));
      btnSubmitChange.remove();
      event.stopPropagation();
    });
  }

  return (
    <>
      {notes.map((note) => {
        if (note.archived) {
          return;
        }
        return (
          <tr key={note.id} className="notes_table-head">
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
                  onChangeNoteBtn(note.id);
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
