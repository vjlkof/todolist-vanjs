import Task from "../classes/Task";
import projectDom from "./projectDom";
import taskDom from "./taskDom";
import { saveData } from "../helpers/localStorageData";

const dialog = document.getElementById("task-dialog");

export default function taskModal() {
  const buttonContainer = document.createElement("div");
  const submitButton = document.createElement("button");
  const closeButton = document.createElement("button");
  const titleValue = document.querySelector("#input-title");
  const descriptionValue = document.querySelector("#input-description");
  const dueDateValue = document.querySelector("#input-duedate");
  const priorityValue = document.querySelector("#input-priority");
  const noteValue = document.querySelector("#input-note");
  const isCompletedValue = document.querySelector("#input-completed");
  const formDialog = document.getElementById("form-task-dialog");
  const dialogTitle = document.getElementById("dialog-title");

  function keyEscapeClose(event) {
    if (event.key === "Escape") {
      closeDialog();
    }
  }

  function closeDialog() {
    console.log("entro");
    dialog.close();
    formDialog.reset();
    dialog.removeChild(buttonContainer);
    document.removeEventListener("keydown", keyEscapeClose);
  }

  buttonContainer.className = "button-container";
  submitButton.type = "submit";
  closeButton.className = "button-close";
  closeButton.type = "button";
  closeButton.textContent = "Close";
  buttonContainer.appendChild(submitButton);
  buttonContainer.appendChild(closeButton);
  dialog.appendChild(buttonContainer);
  formDialog.querySelectorAll("input, select, textarea").forEach((element) => {
    element.disabled = false;
  });

  closeButton.addEventListener("click", closeDialog);

  document.addEventListener("keydown", keyEscapeClose);

  dialog.addEventListener("show", () => dialog.focus());

  const addTask = (project, projectList) => {
    const projectDomManagement = projectDom();

    dialogTitle.textContent = "Add a new task";
    submitButton.className = "button-add";
    submitButton.textContent = "Add";
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      const taskItem = new Task(
        titleValue.value,
        descriptionValue.value,
        dueDateValue.value,
        priorityValue.value,
        noteValue.value,
        isCompletedValue.checked
      );
      project.addTask(taskItem);
      projectDomManagement.addTaskDom(taskItem, project);
      saveData(projectList);
      closeDialog();
    });
  };

  const editTask = (task, project, projectList) => {
    const taskDomManagement = taskDom();

    dialogTitle.textContent = "Edit the task";
    submitButton.className = "button-add";
    submitButton.textContent = "Apply";

    titleValue.value = task.title;
    descriptionValue.value = task.description;
    dueDateValue.value = task.dueDate;
    priorityValue.value = task.priority;
    noteValue.value = task.note;
    isCompletedValue.checked = task.isCompleted;

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      task.edit(
        titleValue.value,
        descriptionValue.value,
        dueDateValue.value,
        priorityValue.value,
        noteValue.value,
        isCompletedValue.checked
      );
      taskDomManagement.editTaskDom(task, project);
      saveData(projectList);
      closeDialog();
    });
  };

  const viewTask = (task) => {
    buttonContainer.removeChild(submitButton);
    dialogTitle.textContent = "Visualize the task";
    formDialog
      .querySelectorAll("input, select, textarea")
      .forEach((element) => {
        element.disabled = true;
      });
    titleValue.value = task.title;
    descriptionValue.value = task.description;
    dueDateValue.value = task.dueDate;
    priorityValue.value = task.priority;
    noteValue.value = task.note;
    isCompletedValue.checked = task.isCompleted;
  };

  const deleteTask = (task, project, projectList) => {
    const projectDomManagement = projectDom();
    project.deleteTask(task);
    projectDomManagement.deleteTaskDom(task);
    saveData(projectList);
    dialog.removeChild(buttonContainer);
    document.removeEventListener("keydown", keyEscapeClose);
  };

  return { addTask, editTask, viewTask, deleteTask };
}
