import generateUniqueId from "../helpers/generateUniqueId";

export default class Project {
  #id = "";
  constructor(name) {
    this.#id = generateUniqueId();
    this.name = name;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(tasks) {
    this.tasks = this.tasks.filter(
      (item) => !(item.name === tasks.name && item.dueDate === tasks.dueDate)
    );
  }
}
