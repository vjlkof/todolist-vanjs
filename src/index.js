import homePage from "./pages/homePage";
import navBar from "./components/navBar";
import "./style.css";

const contentDiv = document.getElementById("content");
document.body.insertBefore(navBar(), contentDiv);
contentDiv.appendChild(homePage());
