import OpenArchiveBtn from "../../Buttons/OpenArchiveBtn/OpenArchiveBtn";
import DeleteAllNotesBtn from "../../Buttons/DeleteAllNotesBtn/DeleteAllNotesBtn";

export default function TheadOfNotes({ clickHandler }) {
  return (
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Created</th>
        <th>Category</th>
        <th>Content</th>
        <th>Dates</th>
        <th></th>

        <th>
          <OpenArchiveBtn onClick={clickHandler} />
        </th>
        <th>
          <DeleteAllNotesBtn />
        </th>
      </tr>
    </thead>
  );
}
