import Project from "../classes/Project";
import projectsDom from "./projectsDom";

const dialog = document.getElementById("project-dialog");

export default function projectModal() {
  const buttonContainer = document.createElement("div");
  const submitButton = document.createElement("button");
  const closeButton = document.createElement("button");
  const nameValue = document.querySelector("#input-name");
  const projectDomManagement = projectsDom();

  buttonContainer.className = "button-container";
  submitButton.type = "submit";
  closeButton.className = "button-close";
  closeButton.type = "button";
  closeButton.textContent = "Close";
  buttonContainer.appendChild(submitButton);
  buttonContainer.appendChild(closeButton);
  dialog.appendChild(buttonContainer);

  closeButton.addEventListener("click", () => {
    dialog.close();
    dialog.removeChild(buttonContainer);
  });

  const addProject = (projects) => {
    submitButton.className = "button-add";
    submitButton.textContent = "Add";
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      const newProject = new Project(nameValue.value);

      projects.addProject(newProject);
      projectDomManagement.addProjectDom(newProject);
      nameValue.value = "";
      dialog.close();
      dialog.removeChild(buttonContainer);
    });
  };
  return { addProject };
}
