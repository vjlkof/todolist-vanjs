import taskModal from "../helpers/taskModal";

export default function editTaskItemButton(task) {
  const button = document.createElement("button");
  const dialog = document.getElementById("task-dialog");
  button.textContent = "Edit";
  button.addEventListener("click", () => {
    dialog.showModal();
    const taskModalManagement = taskModal();
    taskModalManagement.editTask(task);
  });

  return button;
}
