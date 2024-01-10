import homePage from "../pages/homePage";
import styles from "./navBar.module.css";

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
    contentDiv.appendChild(homePage());
  });
  projectsLI.textContent = "Projects";
  projectsLI.addEventListener("click", () => {
    contentDiv.removeChild(document.getElementById("main"));
    contentDiv.appendChild(projects());
  });
  ul.appendChild(homeLI);
  ul.appendChild(projectsLI);
  nav.appendChild(ul);

  return nav;
}
