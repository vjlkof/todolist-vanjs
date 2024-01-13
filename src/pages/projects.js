import projectList from "../components/projectList/projectList";

export default function projects(projectsList) {
  const projectsElement = document.createElement("main");
  const projectListSection = document.createElement("section");
  const pageTitle = document.createElement("h1");

  projectsElement.id = "main";
  pageTitle.textContent = "List of Projects";

  projectListSection.appendChild(pageTitle);
  projectListSection.appendChild(projectList(projectsList));
  projectsElement.appendChild(projectListSection);

  return projectsElement;
}
