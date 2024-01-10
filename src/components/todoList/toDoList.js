import toDoItem from "./toDoItem/toDoItem";

export default function toDoList(toDoItems) {
  const toDoListElement = document.createElement("ul");
  toDoItems.forEach((item) => {
    const listItem = toDoItem(item);
    toDoListElement.appendChild(listItem);
  });
  return toDoListElement;
}
