import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addNoteApi } from "../../middlewares/addNoteApi";
import { createNoteThunk } from "../../Redux/asyncReducer";

export default function FormModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [nameOfNote, setNameOfNote] = useState();
  const [categoryOfNote, setCategoryOfNote] = useState("Task");
  const [contentOfNote, setContentOfNote] = useState();

  function clearForm() {
    setNameOfNote("");
    setContentOfNote("");
    setCategoryOfNote("Task");
  }

  const newNote = {
    name: nameOfNote,
    category: categoryOfNote,
    content: contentOfNote,
  };
  const dispatch = useDispatch();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>List name</Form.Label>
            <Form.Control
              placeholder="Enter Note name"
              onChange={(e) => setNameOfNote(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select onChange={(e) => setCategoryOfNote(e.target.value)}>
              <option>Task</option>
              <option>Random Tought</option>
              <option>Idea</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Note content</Form.Label>
            <Form.Control
              placeholder="Enter Note content"
              onChange={(e) => setContentOfNote(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(createNoteThunk(newNote));
              clearForm();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
