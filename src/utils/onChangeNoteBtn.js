import { changeNote } from "../Redux/actions";

export function onChangeNoteBtn(id, dispatch) {
  const elChange = document.getElementById(id);
  elChange.insertAdjacentHTML(
    "afterend",
    `<button type="button" class="btn-primary" id="btnSubmitChange">Submit</button>`
  );
  elChange.setAttribute("contentEditable", "true");
  elChange.focus({ preventScroll: true });
  const btnSubmitChange = document.getElementById("btnSubmitChange");
  btnSubmitChange.addEventListener("click", (event) => {
    elChange.setAttribute("contentEditable", "false");
    dispatch(changeNote(id, elChange.textContent));
    btnSubmitChange.remove();
    event.stopPropagation();
  });
}
