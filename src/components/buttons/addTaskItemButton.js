import taskModal from "../../domManagement/taskModal";

export default function addTaskItemButton(project, projectList) {
  const button = document.createElement("button");
  const dialog = document.getElementById("task-dialog");
  button.textContent = "Add Task";
  button.addEventListener("click", () => {
    dialog.showModal();
    const taskModalManagement = taskModal();
    taskModalManagement.addTask(project, projectList);
  });

  return button;
}
