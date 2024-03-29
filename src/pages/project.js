import projectTitle from "../components/projectTitle/projectTitle";
import taskList from "../components/taskList/taskList";
import addTaskItemButton from "../components/buttons/addTaskItemButton";

export default function project(projectItem, projectList) {
  const projectElement = document.createElement("main");
  const projectSection = document.createElement("section");
  const pageTitle = document.createElement("h1");
  const addButton = addTaskItemButton(projectItem, projectList);

  projectElement.id = "main";
  pageTitle.textContent = "Project";

  projectSection.appendChild(pageTitle);
  projectSection.appendChild(projectTitle(projectItem, projectList));
  projectSection.appendChild(addButton);
  projectSection.appendChild(taskList(projectItem));
  projectElement.appendChild(projectSection);

  return projectElement;
}
