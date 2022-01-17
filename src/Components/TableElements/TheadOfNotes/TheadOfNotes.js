import OpenArchiveBtn from "../../Buttons/OpenArchiveBtn/OpenArchiveBtn";
import DeleteAllNotesBtn from "../../Buttons/DeleteAllNotesBtn/DeleteAllNotesBtn";

export default function TheadOfNotes() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Created</th>
        <th>Category</th>
        <th>Content</th>
        <th>Dates</th>

        <th>
          <OpenArchiveBtn />
        </th>
        <th>
          <DeleteAllNotesBtn />
        </th>
      </tr>
    </thead>
  );
}
