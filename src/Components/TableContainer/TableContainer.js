import ArchiveNotes from "../ArchiveNotes/ArchiveNotes.js";
import Notes from "../Notes/Notes.js";
import TheadOfNotes from "../TableElements/TheadOfNotes/TheadOfNotes";

export default function TableContainer() {
  return (
    <>
      <h1>There are your Notes</h1>
      <table>
        <TheadOfNotes />
        <tbody>
          <Notes />
          <ArchiveNotes />
        </tbody>
      </table>
    </>
  );
}
