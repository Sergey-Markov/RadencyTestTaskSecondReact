import CommunButton from "../CommunButton.js";
import { BsFillTrashFill } from "react-icons/bs";

export default function DeleteBtn({ onClick }) {
  return (
    <CommunButton
      type="button"
      className="notes_table-head--btn"
      onClick={onClick}
    >
      <BsFillTrashFill />
    </CommunButton>
  );
}
