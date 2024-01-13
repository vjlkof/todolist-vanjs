import projectTitle from "../components/projectTitle";
import taskList from "../components/taskList/taskList";
import addTaskItemButton from "../components/addTaskItemButton";

export default function project(projectItem) {
  const projectElement = document.createElement("main");
  const projectSection = document.createElement("section");
  const pageTitle = document.createElement("h1");
  const addButton = addTaskItemButton(projectItem);

  projectElement.id = "main";

  pageTitle.textContent = "Project";
  projectSection.appendChild(pageTitle);

  projectSection.appendChild(projectTitle(projectItem));

  projectSection.appendChild(addButton);

  projectSection.appendChild(taskList(projectItem));

  projectElement.appendChild(projectSection);

  return projectElement;
}
