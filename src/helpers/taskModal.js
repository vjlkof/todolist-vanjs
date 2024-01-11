import Task from "../classes/Task";
import projectDom from "./projectDom";

const dialog = document.getElementById("task-dialog");

export default function taskModal(project) {
  const submitButton = document.getElementById("show-task-dialog");
  const closeButton = document.getElementById("close-task-dialog");

  const titleValue = document.querySelector("#input-title");
  const descriptionValue = document.querySelector("#input-description");
  const dueDateValue = document.querySelector("#input-duedate");
  const priorityValue = document.querySelector("#input-priority");
  const noteValue = document.querySelector("#input-note");
  const projectDomManagement = projectDom();

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const taskItem = new Task(
      titleValue.value,
      descriptionValue.value,
      dueDateValue.value,
      priorityValue.value,
      noteValue.value
    );
    console.log(project);
    project.addTask(taskItem);
    projectDomManagement.addTaskItemDom(taskItem);

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
