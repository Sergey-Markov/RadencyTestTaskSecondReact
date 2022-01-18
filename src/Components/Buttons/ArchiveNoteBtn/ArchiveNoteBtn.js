import { BsFillArchiveFill } from "react-icons/bs";
import CommunButton from "../CommunButton.js";

export default function ArchiveNoteBtn({ onClick }) {
  return (
    <CommunButton
      type="button"
      className="notes_table-head--btn"
      onClick={onClick}
    >
      <BsFillArchiveFill />
    </CommunButton>
  );
}
