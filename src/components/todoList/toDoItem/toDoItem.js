import deleteTodoItemButton from "../../deleteTodoItemButton";
import viewTodoItemButton from "../../viewTodoItemButton";
import editTodoItemButton from "../../editTodoItemButton";
import styles from "./todoItem.module.css";

export default function todoItem(item) {
  const listItemElement = document.createElement("li");
  const deleteButton = deleteTodoItemButton();
  const editButton = editTodoItemButton();
  const viewButton = viewTodoItemButton();
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
  listItemElement.classList.add(styles.todoItem);

  return listItemElement;
}
