import homePage from "./pages/homePage";
import navBar from "./components/navBar";
import "./style.css";
import { defaultProject, projectList } from "./data";

const contentDiv = document.getElementById("content");
document.body.insertBefore(navBar(defaultProject, projectList), contentDiv);
contentDiv.appendChild(homePage(defaultProject, projectList));
