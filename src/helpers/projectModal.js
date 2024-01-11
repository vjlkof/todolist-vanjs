import Project from "../classes/Project";
import projectsDom from "./projectsDom";

const dialog = document.getElementById("project-dialog");

export default function projectModal(projects) {
  const submitButton = document.getElementById("show-project-dialog");
  const closeButton = document.getElementById("close-project-dialog");

  const nameValue = document.querySelector("#input-name");
  const projectDomManagement = projectsDom();

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(nameValue.value);

    const newProject = new Project(nameValue.value);
    projects.addProject(newProject);
    projectDomManagement.addProjectDom(newProject);

    console.log("paso 2");

    nameValue.value = "";
    dialog.close();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}
