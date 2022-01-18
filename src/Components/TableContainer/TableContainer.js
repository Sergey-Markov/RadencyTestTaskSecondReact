import { useState } from "react";
import ArchiveNotes from "../ArchiveNotes/ArchiveNotes.js";
import Notes from "../Notes/Notes.js";
import TheadOfNotes from "../TableElements/TheadOfNotes/TheadOfNotes";

export default function TableContainer() {
  const [status, setStatus] = useState(false);
  console.log(status);
  function changeStatus(bool) {
    setStatus(bool);
  }
  return (
    <>
      {status ? (
        <>
          <h1>There are your Archive</h1>
          <table>
            <TheadOfNotes setStatus={changeStatus} />
            <tbody>
              <ArchiveNotes />
            </tbody>
          </table>
        </>
      ) : (
        <>
          <h1>There are your Notes</h1>
          <table>
            <TheadOfNotes />
            <tbody>
              <Notes />
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
