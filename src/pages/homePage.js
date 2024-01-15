import projectTitle from "../components/projectTitle/projectTitle";
import taskList from "../components/taskList/taskList";
import projectList from "../components/projectList/projectList";
import addTaskItemButton from "../components/buttons/addTaskItemButton";
import addProjectButton from "../components/buttons/addProjectButton";

export default function homePage(project, projects) {
  const homeElement = document.createElement("main");
  const projectSection = document.createElement("section");
  const projectListSection = document.createElement("section");
  const pageTitle = document.createElement("h1");
  const projectListTitle = document.createElement("h2");
  const addTaskBtn = addTaskItemButton(project, projects);
  const addProjectBtn = addProjectButton(projects);

  homeElement.id = "main";
  pageTitle.textContent = "Welcome to the best to do list";
  projectSection.appendChild(pageTitle);
  projectSection.appendChild(projectTitle(project, projects));
  projectSection.appendChild(addTaskBtn);
  projectSection.appendChild(taskList(project, projects));

  projectListTitle.textContent = "List of Projects";
  projectListSection.appendChild(projectListTitle);
  projectListSection.appendChild(addProjectBtn);
  projectListSection.appendChild(projectList(projects));

  homeElement.appendChild(projectSection);
  homeElement.appendChild(projectListSection);

  return homeElement;
}
