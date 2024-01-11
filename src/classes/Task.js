import generateUniqueId from "../helpers/generateUniqueId";

export default class Task {
  #id = "";
  constructor(title, description, dueDate, priority, note) {
    this.#id = generateUniqueId();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.isCompleted = false;
  }
  isCompleted() {
    return this.isCompleted;
  }
  changeCompleteStatus() {
    this.isCompleted = !this.isCompleted;
  }
  delete() {
    console.log("delete task from visual and data");
  }
}
