import toDoItem from "./toDoItem/toDoItem";

export default function toDoList(toDoItems) {
  const toDoListElement = document.createElement("ul");
  toDoListElement.id = "todo-list";
  toDoItems.forEach((item) => toDoListElement.appendChild(toDoItem(item)));
  return toDoListElement;
}
