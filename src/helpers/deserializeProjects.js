import Task from "../classes/Task";
import Project from "../classes/Project";
import Projects from "../classes/Projects";

export default function deserializeProjects(projects) {
  const projectList = new Projects();
  projects.projects.forEach((project) => {
    let newProject = new Project();
    newProject.id = project.id;
    newProject.name = project.name;
    project.tasks.forEach((task) => {
      const { title, description, dueDate, priority, note, isCompleted } = task;
      let newTask = new Task(
        title,
        description,
        dueDate,
        priority,
        note,
        isCompleted
      );
      newTask.id = task.id;
      newProject.addTask(newTask);
    });
    projectList.addProject(newProject);
  });

  return projectList;
}
