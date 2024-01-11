import taskItem from "../components/taskList/taskItem/taskItem";

export default function projectDom() {
  const addTaskItemDom = (item) => {
    const ulGroup = document.getElementById("task-list");
    ulGroup.appendChild(taskItem(item));
  };
  return { addTaskItemDom };
}
