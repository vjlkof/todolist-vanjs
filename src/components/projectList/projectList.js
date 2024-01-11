import styles from "./projectList.module.css";
import projectItem from "./projectItem/projectItem";

export default function projectList(projects) {
  const projectsElement = document.createElement("div");
  projectsElement.className = styles.projectList;
  projectsElement.id = "project-list";
  projects.projects.forEach((project) => {
    const articleProject = projectItem(project);
    projectsElement.appendChild(articleProject);
  });
  return projectsElement;
}
