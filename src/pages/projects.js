import projectList from "../components/projectList/projectList";

export default function projects(projectsÑist) {
  const projectsElement = document.createElement("main");
  const projectListSection = document.createElement("section");
  const pageTitle = document.createElement("h1");

  projectsElement.id = "main";

  pageTitle.textContent = "List of Projects";
  projectListSection.appendChild(pageTitle);

  projectListSection.appendChild(projectList(projectsÑist));

  projectsElement.appendChild(projectListSection);

  return projectsElement;
}
