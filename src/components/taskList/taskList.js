import taskItem from "./taskItem/taskItem";

export default function taskList(project, projects) {
  const taskListElement = document.createElement("ul");
  taskListElement.id = "task-list";
  project.tasks.forEach((task) =>
    taskListElement.appendChild(taskItem(task, project, projects))
  );
  return taskListElement;
}
