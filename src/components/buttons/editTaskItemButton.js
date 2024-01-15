import taskModal from "../../domManagement/taskModal";

export default function editTaskItemButton(task, project, projects) {
  const button = document.createElement("button");
  const dialog = document.getElementById("task-dialog");
  button.textContent = "Edit";
  button.addEventListener("click", () => {
    dialog.showModal();
    const taskModalManagement = taskModal();
    taskModalManagement.editTask(task, project, projects);
  });

  return button;
}
