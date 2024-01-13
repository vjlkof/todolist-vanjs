import styles from "./projectTitle.module.css";
import changeNameProjectButton from "./changeNameProjectButton";
import deleteProjectButton from "./deleteProjectButton";

export default function projectTitle(project, projecList) {
  const titleContainer = document.createElement("div");
  const projectTitle = document.createElement("h2");
  projectTitle.id = project.id;
  titleContainer.className = styles.projectContainer;
  titleContainer.appendChild(projectTitle);
  titleContainer.appendChild(changeNameProjectButton(project));
  titleContainer.appendChild(deleteProjectButton(project, projecList));
  projectTitle.textContent = project.name;

  return titleContainer;
}
