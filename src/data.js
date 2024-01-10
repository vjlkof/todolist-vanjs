import ToDoItem from "./classes/ToDoItem";
import Project from "./classes/Project";

export const defaultProject = new Project("Default Project");
export const defaultToDoItem = new ToDoItem(
  "Do bed",
  "Doing Bed",
  "2023/28/01",
  "high",
  "note"
);
defaultProject.addToDoItem(defaultToDoItem);

export const projectList = [defaultProject];
