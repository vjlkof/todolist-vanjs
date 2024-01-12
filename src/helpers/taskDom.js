import taskItem from "../components/taskList/taskItem/taskItem";

export default function taskDom() {
  const editTaskDom = (item, project) => {
    const ulGroup = document.getElementById("task-list");
    const oldListItem = document.getElementById(item.id);
    ulGroup.replaceChild(taskItem(item, project), oldListItem);
  };
  return { editTaskDom };
}
