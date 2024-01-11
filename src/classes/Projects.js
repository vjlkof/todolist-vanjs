export default class Projects {
  constructor() {
    this.projects = [];
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
