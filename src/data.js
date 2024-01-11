import TodoItem from "./classes/TodoItem";
import Project from "./classes/Project";

export const defaultProject = new Project("Default Project");
export const defaultTodoItem = new TodoItem(
  "Do bed",
  "Doing Bed",
  "2023/28/01",
  "high",
  "note"
);
defaultProject.addTodoItem(defaultTodoItem);

export const projectList = [defaultProject];
