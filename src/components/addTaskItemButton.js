import taskModal from "../helpers/taskModal";

export default function addTaskItemButton(project) {
  const button = document.createElement("button");
  const dialog = document.getElementById("task-dialog");
  button.textContent = "Add Task";
  button.addEventListener("click", () => {
    dialog.showModal();
    taskModal(project);
  });

  return button;
}
