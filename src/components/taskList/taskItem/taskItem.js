import deleteTaskItemButton from "../../deleteTaskItemButton";
import viewTaskItemButton from "../../viewTaskItemButton";
import editTaskItemButton from "../../editTaskItemButton";
import styles from "./taskItem.module.css";

export default function taskItem(item, project) {
  const listItemElement = document.createElement("li");
  console.log(project);
  const deleteButton = deleteTaskItemButton(item, project);
  const editButton = editTaskItemButton(item, project);
  const viewButton = viewTaskItemButton(item);
  const itemData = document.createElement("p");

  listItemElement.id = item.id;
  itemData.textContent = `${item.title} - ${item.dueDate}`;
  itemData.classList.add(
    styles[item.priority],
    item.isCompleted ? styles.completed : "noApply"
  );
  listItemElement.appendChild(itemData);

  listItemElement.appendChild(viewButton);
  listItemElement.appendChild(editButton);
  listItemElement.appendChild(deleteButton);
  listItemElement.classList.add(styles.taskItem);

  return listItemElement;
}
