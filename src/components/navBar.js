import homePage from "../pages/homePage";
import projects from "../pages/projects";
import styles from "./navBar.module.css";
import { defaultProject, projectList } from "../data";

export default function navBar() {
  const contentDiv = document.getElementById("content");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const homeLI = document.createElement("li");
  const projectsLI = document.createElement("li");

  ul.className = styles.navContainer;
  homeLI.textContent = "Home";
  homeLI.addEventListener("click", () => {
    contentDiv.removeChild(document.getElementById("main"));
    contentDiv.appendChild(homePage(defaultProject, projectList));
  });
  projectsLI.textContent = "Projects";
  projectsLI.addEventListener("click", () => {
    contentDiv.removeChild(document.getElementById("main"));
    contentDiv.appendChild(projects(projectList));
  });
  ul.appendChild(homeLI);
  ul.appendChild(projectsLI);
  nav.appendChild(ul);

  return nav;
}
