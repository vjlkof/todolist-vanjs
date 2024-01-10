import toDoList from "../components/todoList/toDoList";
import addToDoItemButton from "../components/addToDoItemButton";

export default function project(projectItem) {
  const projectElement = document.createElement("div");
  const projectSection = document.createElement("section");
  const pageTitle = document.createElement("h1");
  const projectTitle = document.createElement("h2");
  const addButton = addToDoItemButton();

  projectElement.id = "main";

  pageTitle.textContent = "Project";
  projectSection.appendChild(pageTitle);

  projectTitle.textContent = projectItem.get().name;
  projectSection.appendChild(projectTitle);

  projectSection.appendChild(addButton);

  projectSection.appendChild(toDoList(projectItem.get().toDoItems));

  projectElement.appendChild(projectSection);

  return projectElement;
}
