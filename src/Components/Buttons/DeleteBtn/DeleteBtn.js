import CommunButton from "../CommunButton.js";

export default function DeleteBtn() {
  return (
    <CommunButton
      type="button"
      class="notes_table-head--btn"
      id="deleteAllNotes"
    >
      <i class="bi bi-trash"></i>
    </CommunButton>
  );
}
