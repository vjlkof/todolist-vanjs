import taskModal from "../../domManagement/taskModal";

export default function deleteTaskItemButton(task, project, projects) {
  const button = document.createElement("button");
  button.textContent = "X";
  button.addEventListener("click", () => {
    const taskModalManagement = taskModal();
    taskModalManagement.deleteTask(task, project, projects);
  });
  return button;
}
