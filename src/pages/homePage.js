import ToDoItem from "../classes/ToDoItem";
import Project from "../classes/Project";
import toDoList from "../components/todoList/toDoList";
import projectList from "../components/projectList/projectList";
import addToDoItemButton from "../components/addToDoItemButton";

export default function homePage() {
  const homeElement = document.createElement("div");
  const projectSection = document.createElement("section");
  const projectListSection = document.createElement("section");
  const pageTitle = document.createElement("h1");
  const projectTitle = document.createElement("h2");
  const projectListTitle = document.createElement("h2");
  const addButton = addToDoItemButton();
  const defaultProject = new Project("Default Project");
  const defaultToDoItem = new ToDoItem(
    "Do bed",
    "Doing Bed",
    "2023/28/01",
    "high",
    "note"
  );

  const projects = [defaultProject];

  pageTitle.textContent = "Welcome to the best to do list";
  projectListTitle.textContent = "List of Projects";
  projectSection.appendChild(pageTitle);

  defaultProject.addToDoItem(defaultToDoItem);

  projectTitle.textContent = defaultProject.get().name;
  projectSection.appendChild(projectTitle);

  projectSection.appendChild(addButton);

  projectSection.appendChild(toDoList(defaultProject.get().toDoItems));

  projectListSection.appendChild(projectListTitle);
  projectListSection.appendChild(projectList(projects));

  homeElement.appendChild(projectSection);
  homeElement.appendChild(projectListSection);

  return homeElement;
}
