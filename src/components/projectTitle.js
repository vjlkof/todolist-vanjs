import styles from "./projectTitle.module.css";
import changeNameProjectButton from "./changeNameProjectButton";

export default function projectTitle(project) {
  const titleContainer = document.createElement("div");
  const projectTitle = document.createElement("h2");
  projectTitle.id = project.id;
  titleContainer.className = styles.projectContainer;
  titleContainer.appendChild(projectTitle);
  titleContainer.appendChild(changeNameProjectButton(project));
  projectTitle.textContent = project.name;

  return titleContainer;
}
