import todoItem from "./todoItem/todoItem";

export default function todoList(todoItems) {
  const todoListElement = document.createElement("ul");
  todoListElement.id = "todo-list";
  todoItems.forEach((item) => todoListElement.appendChild(todoItem(item)));
  return todoListElement;
}
