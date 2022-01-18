import CommunButton from "../CommunButton.js";
import { BsFillPencilFill } from "react-icons/bs";

export default function ChangeNoteBtn({ onClick }) {
  return (
    <CommunButton
      type="button"
      className="notes_table-row--btn"
      onClick={onClick}
    >
      <BsFillPencilFill />
    </CommunButton>
  );
}
