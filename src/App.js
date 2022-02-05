import Container from "./Components/Container/Container";
import TableContainer from "./Components/TableContainer/TableContainer";
import CreateNoteBtn from "./Components/Buttons/CreateNoteBtn/CreateNoteBtn";
import { useEffect, useState } from "react";
import TableOfStatistic from "./Components/TableOfStatistic/TableOfStatistic";
import { FormModal } from "./Components/FormModal";
import { useDispatch } from "react-redux";
import { getAllNotesThunk } from "./Redux/asyncReducer";

function App() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNotesThunk());
  }, [dispatch]);
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
