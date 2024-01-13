import generateUniqueId from "../helpers/generateUniqueId";

export default class Project {
  constructor(name) {
    this.id = generateUniqueId();
    this.name = name;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  deleteTask(task) {
    this.tasks = this.tasks.filter((item) => !(item.id === task.id));
  }
  changeName(name) {
    this.name = name;
  }
}
