import styles from "./projectItem.module.css";
import project from "../../../pages/project.js";

export default function projectItem(item, projectList) {
  const articleElement = document.createElement("article");

  const itemData = document.createElement("p");

  itemData.textContent = `${item.name}`;
  itemData.className = "projectItem";
  articleElement.appendChild(itemData);
  articleElement.className = styles.projectItem;
  articleElement.id = item.id;
  articleElement.addEventListener("click", () => {
    const contentDiv = document.getElementById("content");
    contentDiv.removeChild(document.getElementById("main"));
    contentDiv.appendChild(project(item, projectList));
  });

  return articleElement;
}
