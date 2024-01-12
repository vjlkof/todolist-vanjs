import Task from "../classes/Task";
import projectDom from "./projectDom";
import taskDom from "./taskDom";

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

  closeButton.addEventListener("click", () => {
    dialog.close();
    formDialog.reset();
    dialog.removeChild(buttonContainer);
  });

  const addTask = (project) => {
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
      projectDomManagement.addTaskItemDom(taskItem);
      dialog.close();
      formDialog.reset();
      dialog.removeChild(buttonContainer);
    });
  };

  const editTask = (task) => {
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
      taskDomManagement.editTaskDom(task);
      dialog.close();
      formDialog.reset();
      dialog.removeChild(buttonContainer);
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

  return { addTask, editTask, viewTask };
}
