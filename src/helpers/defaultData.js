import Task from "../classes/Task";
import Project from "../classes/Project";
import Projects from "../classes/Projects";

const defaultProject = new Project("Default Project");

export const defaultProjectList = new Projects();
defaultProjectList.addProject(defaultProject);
