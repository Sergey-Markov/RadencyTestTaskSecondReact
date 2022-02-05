import CommunButton from "../CommunButton.js";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteAllNoteThunk } from "../../../Redux/asyncReducer.js";

export default function DeleteAllNotesBtn() {
  const dispatch = useDispatch();
  async function deleteAll() {
    dispatch(deleteAllNoteThunk());
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
