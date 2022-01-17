export default function TableOfStatistic() {
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
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Random Thought</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Idea</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
