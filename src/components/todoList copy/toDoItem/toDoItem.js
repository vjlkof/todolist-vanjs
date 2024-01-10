import deleteToDoItemButton from "../../deleteToDoItemButton";
import viewToDoItemButton from "../../viewToDoItemButton";
import editToDoItemButton from "../../editToDoItemButton";
import styles from "./toDoItem.module.css";

export default function toDoItem(item) {
  const listItemElement = document.createElement("li");
  const deleteButton = deleteToDoItemButton();
  const editButton = editToDoItemButton();
  const viewButton = viewToDoItemButton();
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
  listItemElement.classList.add(styles.toDoItem);

  return listItemElement;
}
