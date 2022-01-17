import CommunButton from "../CommunButton.js";
import { BsFillTrashFill } from "react-icons/bs";

export default function DeleteAllNotesBtn() {
  return (
    <CommunButton
      type="button"
      className="notes_table-head--btn"
      id="deleteAllNotes"
    >
      <BsFillTrashFill />
    </CommunButton>
  );
}
