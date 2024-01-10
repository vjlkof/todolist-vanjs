import generateUniqueId from "../helpers/generateUniqueId";

export default class ToDoItem {
  constructor(title, description, dueDate, priority, note) {
    this.id = generateUniqueId();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.isCompleted = false;
  }
  get() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.due,
      priority: this.priority,
      note: this.note,
    };
  }
  set(title, description, dueDate, priority, note) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    return {
      title: this.title,
      description: this.description,
      dueDate: this.due,
      priority: this.priority,
      note: this.note,
    };
  }
  isCompleted() {
    return this.isCompleted;
  }
  changeCompleteStatus() {
    this.isCompleted = !this.isCompleted;
  }
  delete() {
    console.log("delete todo item from visual and data");
  }
}
