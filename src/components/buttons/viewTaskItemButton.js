import taskModal from "../../helpers/taskModal";

export default function viewTaskItemButton(task) {
  const button = document.createElement("button");
  const dialog = document.getElementById("task-dialog");
  button.textContent = "View";
  button.addEventListener("click", () => {
    dialog.showModal();
    const taskModalManagement = taskModal();
    taskModalManagement.viewTask(task);
  });

  return button;
}
