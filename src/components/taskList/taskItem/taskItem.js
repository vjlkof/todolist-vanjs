import deleteTaskItemButton from "../../buttons/deleteTaskItemButton";
import viewTaskItemButton from "../../buttons/viewTaskItemButton";
import editTaskItemButton from "../../buttons/editTaskItemButton";
import styleCompleteStatusDom from "../../../helpers/styleCompleteStatusDom";
import styles from "./taskItem.module.css";
import { saveData } from "../../../helpers/localStorageData";

export default function taskItem(item, project, projects) {
  const listItemElement = document.createElement("li");
  const deleteButton = deleteTaskItemButton(item, project, projects);
  const editButton = editTaskItemButton(item, project, projects);
  const viewButton = viewTaskItemButton(item);
  const itemData = document.createElement("p");

  itemData.addEventListener("click", () => {
    item.changeCompleteStatus();
    saveData(projects);
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
