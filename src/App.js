import Container from "./Components/Container/Container";
import TableContainer from "./Components/TableContainer/TableContainer";
import CreateNoteBtn from "./Components/Buttons/CreateNoteBtn/CreateNoteBtn";
import { useState } from "react";
import TableOfStatistic from "./Components/TableOfStatistic/TableOfStatistic";
import { FormModal } from "./Components/FormModal";
// import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <Container>
      <TableContainer />
      <CreateNoteBtn setShow={setShow} />
      <TableOfStatistic />
      <FormModal show={show} setShow={setShow} />
    </Container>
  );
}

export default App;
