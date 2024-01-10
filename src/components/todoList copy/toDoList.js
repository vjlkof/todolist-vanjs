import toDoItem from "./toDoItem/toDoItem";

export default function toDoList(projects) {
  const ProjectsElement = document.createElement("div");
  projects.forEach((project) => {
    const articleProject = toDoItem(project);
    ProjectsElement.appendChild(articleProject);
  });
  return ProjectsElement;
}
