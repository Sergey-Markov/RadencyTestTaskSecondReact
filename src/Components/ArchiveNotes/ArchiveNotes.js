import ArchiveNoteBtn from "../Buttons/ArchiveNoteBtn/ArchiveNoteBtn.js";
import ChangeNoteBtn from "../Buttons/ChangeNoteBtn/ChangeNoteBtn.js";
import DeleteBtn from "../Buttons/DeleteBtn/DeleteBtn";

export default function ArcArchiveNotes() {
  const dateOfCreateMonth = new Date()
    .toDateString()
    .split(" ")
    .splice(1, 2)
    .join(" ");
  const dateOfCreateYear = new Date()
    .toDateString()
    .split(" ")
    .splice(3, 3)
    .join(" ");
  return (
    <tr className="notes_table-head">
      <td className="notes_table-word_wrap">Idea</td>
      <td>
        {dateOfCreateMonth}, {dateOfCreateYear}
      </td>
      <td>Idea</td>
      <td className="notes_table-word_wrap">archive 12/12/1212</td>
      <td>12/12/1212</td>
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
}
