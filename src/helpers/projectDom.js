import todoItem from "../components/todoList/todoItem/todoItem";

export default function projectDom() {
  const addTodoItemDom = (item) => {
    const ulGroup = document.getElementById("todo-list");
    ulGroup.appendChild(todoItem(item));
  };
  return { addTodoItemDom };
}
