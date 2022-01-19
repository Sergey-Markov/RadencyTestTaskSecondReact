import { useSelector } from "react-redux";

export default function TableOfStatistic() {
  const notes = useSelector((state) => state.notes);

  function count() {
    const category = {
      task: 0,
      taskArch: 0,
      random: 0,
      randomArch: 0,
      idea: 0,
      ideaArch: 0,
    };
    notes.map((note) => {
      if (note.archived === false && note.category === "Idea") {
        category.idea += 1;
      }
      if (note.archived === true && note.category === "Idea") {
        category.ideaArch += 1;
      }

      if (note.archived === false && note.category === "Task") {
        category.task += 1;
      }
      if (note.archived === true && note.category === "Task") {
        category.taskArch += 1;
      }

      if (note.archived === false && note.category === "Random Tought") {
        category.random += 1;
      }
      if (note.archived === true && note.category === "Random Tought") {
        category.randomArch += 1;
      }
    });
    return category;
  }
  const category = count();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Note Category</th>
            <th>Active</th>
            <th>Archived</th>
          </tr>
        </thead>
        <tbody id="tbodyCount">
          <tr>
            <td>Task</td>
            <td>{category.task}</td>
            <td>{category.taskArch}</td>
          </tr>
          <tr>
            <td>Random Thought</td>
            <td>{category.random}</td>
            <td>{category.randomArch}</td>
          </tr>
          <tr>
            <td>Idea</td>
            <td>{category.idea}</td>
            <td>{category.ideaArch}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
