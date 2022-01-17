import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shortid from "shortid";

export default function FormModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [nameOfNote, setNameOfNote] = useState("");
  const [categoryOfNote, setCategoryOfNote] = useState("Random Tought");
  const [contentOfNote, setContentOfNote] = useState("");

  const newNote = {
    id: shortid(),
    nameOfNote,
    date: createNewDate(),
    category: categoryOfNote,
    text: contentOfNote,
    allDatesFromText: allDates(contentOfNote),
  };

  function createNewNote() {
    console.log(nameOfNote, categoryOfNote, contentOfNote);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ============================================== */}
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
              handleClose();
              createNewNote();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function createNewDate() {
  const dateOfCreateMonth = new Date()
    .toDateString()
    .split(" ")
    .splice(1, 2)
    .join(" ");
  const dateOfCreateYear = new Date()
    .toDateString()
    .split(" ")
    .splice(3, 3)
    .join(" ");
  return `${dateOfCreateMonth}, ${dateOfCreateYear}`;
}

function allDates(str) {
  const res = str.match(/\d{2}([\/.-])\d{2}\1\d{4}/g);
  if (res) {
    return res.join(", ");
  }
  return "";
}
