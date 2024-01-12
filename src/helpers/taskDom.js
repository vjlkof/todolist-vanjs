import taskItem from "../components/taskList/taskItem/taskItem";

export default function taskDom() {
  const editTaskDom = (item) => {
    const ulGroup = document.getElementById("task-list");
    const oldListItem = document.getElementById(item.id);
    ulGroup.replaceChild(taskItem(item), oldListItem);
  };
  return { editTaskDom };
}
