import todoModal from "../helpers/todomodal";

export default function addTodoItemButton(project) {
  const button = document.createElement("button");
  const dialog = document.getElementById("todoDialog");
  button.textContent = "Add Task";
  button.addEventListener("click", () => {
    dialog.showModal();
    todoModal(project);
  });

  return button;
}
