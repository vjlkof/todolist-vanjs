import toDoItem from "../components/todoList/toDoItem/toDoItem";

export default function projectDom() {
  const addTodoItemDom = (item) => {
    const ulGroup = document.getElementById("todo-list");
    ulGroup.appendChild(toDoItem(item));
  };
  return { addTodoItemDom };
}
