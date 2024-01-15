import taskModal from "../../helpers/taskModal";

export default function deleteTaskItemButton(task, project, projects) {
  const button = document.createElement("button");
  button.textContent = "X";
  button.addEventListener("click", () => {
    const taskModalManagement = taskModal();
    taskModalManagement.deleteTask(task, project, projects);
  });
  return button;
}
