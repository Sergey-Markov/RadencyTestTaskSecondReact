import { Button } from "react-bootstrap";
import CommunButton from "../CommunButton.js";

export default function CreateNoteBtn({ setShow }) {
  const handleShow = () => setShow(true);

  return (
    <CommunButton
      type="button"
      className="btn create_note"
      id="closeArchive"
      onClick={handleShow}
    >
      Create Note
    </CommunButton>
  );
}
