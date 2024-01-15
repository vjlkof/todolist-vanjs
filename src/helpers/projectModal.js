import Project from "../classes/Project";
import projectListDom from "./projectListDom";
import projectDom from "./projectDom";
import { saveData } from "../helpers/localStorageData";

const dialog = document.getElementById("project-dialog");

export default function projectModal() {
  const buttonContainer = document.createElement("div");
  const submitButton = document.createElement("button");
  const closeButton = document.createElement("button");
  const nameValue = document.querySelector("#input-name");
  const projectListDomManagement = projectListDom();

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

  const addProject = (projectList) => {
    submitButton.className = "button-add";
    submitButton.textContent = "Add";
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      const newProject = new Project(nameValue.value);

      projectList.addProject(newProject);
      projectListDomManagement.addProjectDom(newProject);
      saveData(projectList);
      nameValue.value = "";
      dialog.close();
      dialog.removeChild(buttonContainer);
    });
  };

  const projectChangeName = (project, projectList) => {
    const projectDomManagement = projectDom();
    submitButton.className = "button-add";
    submitButton.textContent = "Apply";
    nameValue.value = project.name;
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      project.changeName(nameValue.value);
      projectDomManagement.changeNameDom(project);
      projectListDomManagement.changeProjectDom(project);
      saveData(projectList);
      nameValue.value = "";
      dialog.close();
      dialog.removeChild(buttonContainer);
    });
  };

  const deleteProject = (project, projectList) => {
    dialog.removeChild(buttonContainer);
    if (projectList.projects.length > 1) {
      projectList.removeProject(project);
      projectListDomManagement.deleteProjectDom(projectList);
      saveData(projectList);
      return;
    }
    alert("The delete cannot be processed because you have only 1 project");
  };

  return { addProject, projectChangeName, deleteProject };
}
