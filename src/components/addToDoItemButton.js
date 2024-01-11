import toDoModal from "../helpers/toDomodal";

export default function addToDoItemButton(project) {
  const button = document.createElement("button");
  const dialog = document.getElementById("toDoDialog");
  button.textContent = "Add Task";
  button.addEventListener("click", () => {
    dialog.showModal();
    toDoModal(project);
  });

  return button;
}
