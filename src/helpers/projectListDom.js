import homePage from "../pages/homePage";
import projectItem from "../components/projectList/projectItem/projectItem";

export default function projectsDom() {
  const addProjectDom = (item) => {
    const projectContainer = document.getElementById("project-list");
    projectContainer.appendChild(projectItem(item));
  };

  const changeProjectDom = (project) => {
    const projectContainer = document.getElementById("project-list");
    const oldProject = document.querySelector(`#project-list #${project.id}`);
    if (oldProject) {
      projectContainer.replaceChild(projectItem(project), oldProject);
    }
  };

  const deleteProjectDom = (projects) => {
    const contentDiv = document.getElementById("content");
    contentDiv.removeChild(document.getElementById("main"));
    contentDiv.appendChild(homePage(projects.projects[0], projects));
  };

  return { addProjectDom, changeProjectDom, deleteProjectDom };
}
