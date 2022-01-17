import CommunButton from "../CommunButton.js";
import { BsFillPencilFill } from "react-icons/bs";

export default function ChangeNoteBtn() {
  return (
    <CommunButton type="button" className="notes_table-row--btn">
      <BsFillPencilFill />
    </CommunButton>
  );
}
