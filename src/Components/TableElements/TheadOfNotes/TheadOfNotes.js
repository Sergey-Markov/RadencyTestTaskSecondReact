import OpenArchiveBtn from "../../Buttons/OpenArchiveBtn/OpenArchiveBtn";
import DeleteAllNotesBtn from "../../Buttons/DeleteAllNotesBtn/DeleteAllNotesBtn";

export default function TheadOfNotes({ setStatus }) {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Created</th>
        <th>Category</th>
        <th>Content</th>
        <th>Dates</th>

        <th>
          <OpenArchiveBtn setStatus={setStatus} />
        </th>
        <th>
          <DeleteAllNotesBtn />
        </th>
      </tr>
    </thead>
  );
}
