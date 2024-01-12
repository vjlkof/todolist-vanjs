import generateUniqueId from "../helpers/generateUniqueId";

export default class Task {
  constructor(
    title,
    description,
    dueDate,
    priority,
    note,
    isCompleted = false
  ) {
    this.id = generateUniqueId();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.isCompleted = isCompleted;
  }
  isCompleted() {
    return this.isCompleted;
  }
  changeCompleteStatus() {
    this.isCompleted = !this.isCompleted;
  }
  edit(title, description, dueDate, priority, note, isCompleted) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.isCompleted = isCompleted;
  }
}
