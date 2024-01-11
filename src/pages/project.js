import taskList from "../components/taskList/taskList";
import addTaskItemButton from "../components/addTaskItemButton";

export default function project(projectItem) {
  const projectElement = document.createElement("main");
  const projectSection = document.createElement("section");
  const pageTitle = document.createElement("h1");
  const projectTitle = document.createElement("h2");
  const addButton = addTaskItemButton(projectItem);

  projectElement.id = "main";

  pageTitle.textContent = "Project";
  projectSection.appendChild(pageTitle);

  projectTitle.textContent = projectItem.name;
  projectSection.appendChild(projectTitle);

  projectSection.appendChild(addButton);

  projectSection.appendChild(taskList(projectItem.tasks));

  projectElement.appendChild(projectSection);

  return projectElement;
}
