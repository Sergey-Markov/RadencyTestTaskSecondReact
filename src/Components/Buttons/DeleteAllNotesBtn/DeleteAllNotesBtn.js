import CommunButton from "../CommunButton.js";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteAllNotes } from "../../../Redux/actions.js";

export default function DeleteAllNotesBtn() {
  const dispatch = useDispatch();
  function deleteAll() {
    console.log("click");
    dispatch(deleteAllNotes());
  }
  return (
    <CommunButton
      type="button"
      className="notes_table-head--btn"
      id="deleteAll"
      onClick={deleteAll}
    >
      <BsFillTrashFill />
    </CommunButton>
  );
}
