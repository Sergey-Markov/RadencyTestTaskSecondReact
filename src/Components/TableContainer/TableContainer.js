export default function TableContainer() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>

          <th>
            <button
              type="button"
              class="notes_table-head--btn"
              id="showArchTable"
            >
              <i class="bi bi-archive"></i>
            </button>
          </th>
          <th>
            <button
              type="button"
              class="notes_table-head--btn"
              id="deleteAllNotes"
            >
              <i class="bi bi-trash"></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody class="parentFirst" id="tbody"></tbody>
    </table>
  );
}
