import homePage from "./pages/homePage";
import navBar from "./components/navBar/navBar";
import "./style.css";
import Projects from "./classes/Projects";
import { defaultProjectList } from "./helpers/defaultData";
import { getData, saveData } from "./helpers/localStorageData";
import deserializeProjects from "./helpers/deserializeProjects";

const contentDiv = document.getElementById("content");
let projectsLocal = getData();

if (!projectsLocal) {
  projectsLocal = defaultProjectList;
  saveData(projectsLocal);
} else {
  projectsLocal = deserializeProjects(projectsLocal);
}
const projectList = projectsLocal;

document.body.insertBefore(
  navBar(projectList.projects[0], projectList),
  contentDiv
);
contentDiv.appendChild(homePage(projectList.projects[0], projectList));
