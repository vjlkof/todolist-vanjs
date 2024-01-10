import styles from "./projectItem.module.css";

export default function projectItem(item) {
  const articleElement = document.createElement("article");

  const itemData = document.createElement("p");

  itemData.textContent = `${item.name}`;
  itemData.className = "projectItem";
  articleElement.appendChild(itemData);
  articleElement.className = styles.projectItem;

  return articleElement;
}
