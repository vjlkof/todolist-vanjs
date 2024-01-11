import TodoItem from "../classes/TodoItem";
import projectDom from "./projectDom";

const dialog = document.getElementById("todoDialog");

export default function todoModal(project) {
  const submitButton = document.getElementById("showTodoDialog");
  const closeButton = document.getElementById("closeTodoDialog");

  const titleValue = document.querySelector("#input-title");
  const descriptionValue = document.querySelector("#input-description");
  const dueDateValue = document.querySelector("#input-duedate");
  const priorityValue = document.querySelector("#input-priority");
  const noteValue = document.querySelector("#input-note");
  const projectDomManagement = projectDom();

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const todoItem = new TodoItem(
      titleValue.value,
      descriptionValue.value,
      dueDateValue.value,
      priorityValue.value,
      noteValue.value
    );
    project.addTodoItem(todoItem);
    projectDomManagement.addTodoItemDom(todoItem);

    console.log("paso 2");

    titleValue.value = "";
    descriptionValue.value = "";
    dueDateValue.value = "";
    priorityValue.value = "";
    noteValue.value = "";
    dialog.close();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}
