import projectTitle from "../components/projectTitle";
import taskList from "../components/taskList/taskList";
import projectList from "../components/projectList/projectList";
import addTaskItemButton from "../components/addTaskItemButton";
import addProjectButton from "../components/addProjectButton";

export default function homePage(defaultProject, projects) {
  const homeElement = document.createElement("main");
  const projectSection = document.createElement("section");
  const projectListSection = document.createElement("section");
  const pageTitle = document.createElement("h1");
  const projectListTitle = document.createElement("h2");
  const addTaskBtn = addTaskItemButton(defaultProject);
  const addProjectBtn = addProjectButton(projects);

  homeElement.id = "main";
  pageTitle.textContent = "Welcome to the best to do list";
  projectSection.appendChild(pageTitle);
  projectSection.appendChild(projectTitle(defaultProject, projects));
  projectSection.appendChild(addTaskBtn);
  projectSection.appendChild(taskList(defaultProject));

  projectListTitle.textContent = "List of Projects";
  projectListSection.appendChild(projectListTitle);
  projectListSection.appendChild(addProjectBtn);
  projectListSection.appendChild(projectList(projects));

  homeElement.appendChild(projectSection);
  homeElement.appendChild(projectListSection);

  return homeElement;
}
