import todoList from "../components/todoList/todoList";
import addTodoItemButton from "../components/addTodoItemButton";

export default function project(projectItem) {
  const projectElement = document.createElement("main");
  const projectSection = document.createElement("section");
  const pageTitle = document.createElement("h1");
  const projectTitle = document.createElement("h2");
  const addButton = addTodoItemButton(projectItem);

  projectElement.id = "main";

  pageTitle.textContent = "Project";
  projectSection.appendChild(pageTitle);

  projectTitle.textContent = projectItem.get().name;
  projectSection.appendChild(projectTitle);

  projectSection.appendChild(addButton);

  projectSection.appendChild(todoList(projectItem.get().todoItems));

  projectElement.appendChild(projectSection);

  return projectElement;
}
