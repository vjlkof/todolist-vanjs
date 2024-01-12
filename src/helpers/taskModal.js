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
  const projectDomManagement = projectDom();
  const taskInfo = document.querySelector(".task-info");

  buttonContainer.className = "button-container";
  submitButton.type = "submit";
  closeButton.className = "button-close";
  closeButton.type = "button";
  closeButton.textContent = "Close";
  buttonContainer.appendChild(submitButton);
  buttonContainer.appendChild(closeButton);
  dialog.appendChild(buttonContainer);

  const addTask = (project) => {
    submitButton.className = "button-add";
    submitButton.textContent = "Add";
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      const taskItem = new Task(
        titleValue.value,
        descriptionValue.value,
        dueDateValue.value,
        priorityValue.value,
        noteValue.value
      );
      project.addTask(taskItem);
      projectDomManagement.addTaskItemDom(taskItem);
      titleValue.value = "";
      descriptionValue.value = "";
      dueDateValue.value = "";
      priorityValue.value = "";
      noteValue.value = "";
      dialog.close();
      dialog.removeChild(buttonContainer);
    });
    closeButton.addEventListener("click", () => {
      dialog.close();
      dialog.removeChild(buttonContainer);
    });
  };

  const editTask = (task) => {
    const taskDomManagement = taskDom();
    const isCompletedLabel = document.createElement("label");
    const isCompletedValue = document.createElement("input");

    submitButton.className = "button-add";
    submitButton.textContent = "Apply";

    isCompletedValue.id = "input-completed";
    isCompletedLabel.id = "label-completed";
    isCompletedValue.type = "checkbox";
    isCompletedLabel.textContent = "Completed";
    taskInfo.appendChild(isCompletedLabel);
    taskInfo.appendChild(isCompletedValue);

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
      titleValue.value = "";
      descriptionValue.value = "";
      dueDateValue.value = "";
      priorityValue.value = "";
      noteValue.value = "";
      isCompletedValue.checked = false;
      dialog.close();
      dialog.removeChild(buttonContainer);
      taskInfo.removeChild(isCompletedValue);
      taskInfo.removeChild(isCompletedLabel);
    });
    closeButton.addEventListener("click", () => {
      dialog.close();
      dialog.removeChild(buttonContainer);
      taskInfo.removeChild(isCompletedLabel);
      taskInfo.removeChild(isCompletedValue);
    });
  };

  return { addTask, editTask };
}
