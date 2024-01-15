import styles from "./projectTitle.module.css";
import changeNameProjectButton from "../buttons/changeNameProjectButton";
import deleteProjectButton from "../buttons/deleteProjectButton";

export default function projectTitle(project, projecList) {
  const titleContainer = document.createElement("div");
  const projectTitle = document.createElement("h2");
  projectTitle.id = project.id;
  titleContainer.className = styles.projectContainer;
  titleContainer.appendChild(projectTitle);
  titleContainer.appendChild(changeNameProjectButton(project, projecList));
  titleContainer.appendChild(deleteProjectButton(project, projecList));
  projectTitle.textContent = project.name;

  return titleContainer;
}
