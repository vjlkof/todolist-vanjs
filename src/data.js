import Task from "./classes/Task";
import Project from "./classes/Project";
import Projects from "./classes/Projects";

export const defaultProject = new Project("Default Project");
export const defaultTask = new Task(
  "Do bed",
  "Doing Bed",
  "2023/28/01",
  "high",
  "note"
);
console.log(defaultProject);
defaultProject.addTask(defaultTask);

export const projectList = new Projects();
projectList.addProject(defaultProject);
