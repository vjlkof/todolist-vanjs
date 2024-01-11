import deleteTaskItemButton from "../../deleteTaskItemButton";
import viewTaskItemButton from "../../viewTaskItemButton";
import editTaskItemButton from "../../editTaskItemButton";
import styles from "./taskItem.module.css";

export default function taskItem(item) {
  const listItemElement = document.createElement("li");
  const deleteButton = deleteTaskItemButton();
  const editButton = editTaskItemButton();
  const viewButton = viewTaskItemButton();
  const itemData = document.createElement("p");

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
