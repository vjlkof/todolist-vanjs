import styles from "./projectList.module.css";
import projectItem from "./projectItem/projectItem";

export default function projectList(projects) {
  const projectsElement = document.createElement("div");
  projectsElement.className = styles.projectList;
  projects.forEach((project) => {
    const articleProject = projectItem(project);
    projectsElement.appendChild(articleProject);
  });
  return projectsElement;
}
