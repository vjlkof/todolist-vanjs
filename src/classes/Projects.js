export default class Projects {
  constructor() {
    this.projects = [];
  }
  get() {
    return { projects: this.projects };
  }
  set(projects) {
    this.projects = projects;
  }
  addProject(project) {
    this.projects.push(project);
  }
  removeProject(project) {
    this.projects = this.projects.filter(
      (item) => !(item.name === project.name)
    );
  }
}
