import { createSelector } from "reselect";

export const getNotes = (state) => state.notes;

// function fuck(e) {
//   if (e.target.classList.value === "bi bi-pencil") {
//     const elBtn = e.target.parentElement;
//     const elChange =
//       elBtn.parentElement.previousElementSibling.previousElementSibling;
//     const noteDates = elBtn.parentElement.previousElementSibling;

//     elChange.insertAdjacentHTML(
//       "afterend",
//       `<button type="button" class="btn btn-primary" id="btnSubmitChange">Submit</button>`
//     );
//     elChange.setAttribute("contentEditable", "true");
//     elChange.focus({ preventScroll: true });
//     const btnSubmitChange = document.getElementById("btnSubmitChange");
//     btnSubmitChange.addEventListener("click", (event) => {
//       elChange.setAttribute("contentEditable", "false");
//       noteDates.innerHTML = allDates(elChange.innerHTML);
//       btnSubmitChange.remove();
//       saveNotes();
//       event.stopPropagation();
//     });

//     countOfActiveCategory();
//     e.stopPropagation();
//     saveNotes();
//   }
// }
