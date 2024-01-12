import taskItem from "../components/taskList/taskItem/taskItem";

export default function projectDom() {
  const addTaskDom = (item, project) => {
    const ulGroup = document.getElementById("task-list");
    ulGroup.appendChild(taskItem(item, project));
  };
  const deleteTaskDom = (item) => {
    const ulGroup = document.getElementById("task-list");
    ulGroup.removeChild(document.getElementById(item.id));
  };
  return { addTaskDom, deleteTaskDom };
}
