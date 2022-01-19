import { BsFillArchiveFill } from "react-icons/bs";
import CommunButton from "../CommunButton.js";

export default function OpenArchiveBtn({ onClick }) {
  return (
    <CommunButton
      type="button"
      className="notes_table-head--btn"
      id="showArchTable"
      onClick={onClick}
    >
      <BsFillArchiveFill />
    </CommunButton>
  );
}
