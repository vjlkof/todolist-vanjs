import taskItem from "./taskItem/taskItem";

export default function taskList(tasks) {
  const taskListElement = document.createElement("ul");
  taskListElement.id = "task-list";
  tasks.forEach((task) => taskListElement.appendChild(taskItem(task)));
  return taskListElement;
}
