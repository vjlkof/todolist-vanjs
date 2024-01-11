import ToDoItem from "../classes/ToDoItem";
import projectDom from "./projectDom";

const dialog = document.getElementById("toDoDialog");

export default function toDoModal(project) {
  const submitButton = document.getElementById("showToDoDialog");
  const closeButton = document.getElementById("closeToDoDialog");

  const titleValue = document.querySelector("#input-title");
  const descriptionValue = document.querySelector("#input-description");
  const dueDateValue = document.querySelector("#input-duedate");
  const priorityValue = document.querySelector("#input-priority");
  const noteValue = document.querySelector("#input-note");
  const projectDomManagement = projectDom();

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(titleValue.value);
    console.log(descriptionValue.value);
    console.log(dueDateValue.value);
    console.log(priorityValue.value);
    console.log(noteValue.value);
    const toDoItem = new ToDoItem(
      titleValue.value,
      descriptionValue.value,
      dueDateValue.value,
      priorityValue.value,
      noteValue.value
    );
    project.addToDoItem(toDoItem);
    projectDomManagement.addTodoItemDom(toDoItem);

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
