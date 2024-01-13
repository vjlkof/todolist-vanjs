import taskItem from "./taskItem/taskItem";

export default function taskList(project) {
  const taskListElement = document.createElement("ul");
  taskListElement.id = "task-list";
  project.tasks.forEach((task) =>
    taskListElement.appendChild(taskItem(task, project))
  );
  return taskListElement;
}
