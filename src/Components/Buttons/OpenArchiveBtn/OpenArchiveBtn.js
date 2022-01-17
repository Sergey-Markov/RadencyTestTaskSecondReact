import { BsFillArchiveFill } from "react-icons/bs";
import CommunButton from "../CommunButton.js";

export default function OpenArchiveBtn() {
  return (
    <CommunButton
      type="button"
      className="notes_table-head--btn"
      id="showArchTable"
    >
      <BsFillArchiveFill />
    </CommunButton>
  );
}
