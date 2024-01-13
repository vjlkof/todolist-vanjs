import deleteTaskItemButton from "../../deleteTaskItemButton";
import viewTaskItemButton from "../../viewTaskItemButton";
import editTaskItemButton from "../../editTaskItemButton";
import styleCompleteStatusDom from "../../../helpers/styleCompleteStatusDom";
import styles from "./taskItem.module.css";

export default function taskItem(item, project) {
  const listItemElement = document.createElement("li");
  console.log(project);
  const deleteButton = deleteTaskItemButton(item, project);
  const editButton = editTaskItemButton(item, project);
  const viewButton = viewTaskItemButton(item);
  const itemData = document.createElement("p");

  itemData.addEventListener("click", () => {
    item.changeCompleteStatus();
    console.log(item.isCompleted);
    styleCompleteStatusDom(item, itemData, styles);
  });

  listItemElement.id = item.id;
  itemData.textContent = `${item.title} - ${item.dueDate}`;
  itemData.classList.add(styles[item.priority]);
  styleCompleteStatusDom(item, itemData, styles);
  listItemElement.appendChild(itemData);
  listItemElement.appendChild(viewButton);
  listItemElement.appendChild(editButton);
  listItemElement.appendChild(deleteButton);
  listItemElement.classList.add(styles.taskItem);

  return listItemElement;
}
