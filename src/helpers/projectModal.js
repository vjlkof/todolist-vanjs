import Project from "../classes/Project";
import projectsDom from "./projectsDom";
import projectDom from "./projectDom";

const dialog = document.getElementById("project-dialog");

export default function projectModal() {
  const buttonContainer = document.createElement("div");
  const submitButton = document.createElement("button");
  const closeButton = document.createElement("button");
  const nameValue = document.querySelector("#input-name");
  const projectsDomManagement = projectsDom();

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
      projectsDomManagement.addProjectDom(newProject);
      nameValue.value = "";
      dialog.close();
      dialog.removeChild(buttonContainer);
    });
  };

  const projectChangeName = (project) => {
    const projectDomManagement = projectDom();
    submitButton.className = "button-add";
    submitButton.textContent = "Apply";
    nameValue.value = project.name;
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      project.changeName(nameValue.value);
      projectDomManagement.changeNameDom(project);
      projectsDomManagement.changeProjectDom(project);
      nameValue.value = "";
      dialog.close();
      dialog.removeChild(buttonContainer);
    });
  };

  const deleteProject = (project, projectList) => {
    dialog.removeChild(buttonContainer);
    if (projectList.projects.length > 1) {
      projectList.removeProject(project);
      projectsDomManagement.deleteProjectDom(projectList);
      return;
    }
    alert("The delete cannot be processed because you have only 1 project");
  };

  return { addProject, projectChangeName, deleteProject };
}
