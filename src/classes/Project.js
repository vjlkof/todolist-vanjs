export default class Project {
  constructor(name) {
    this.name = name;
    this.toDoItems = [];
  }
  get() {
    return { name: this.name, toDoItems: this.toDoItems };
  }
  set(name, todoItems) {
    this.name = name;
    this.todoItems = todoItems;
  }
  addToDoItem(toDoItem) {
    this.toDoItems.push(toDoItem);
  }
  removeToDoItem(toDoItem) {
    this.ToDoItem = this.toDoItems.filter(
      (item) =>
        !(item.name === toDoItem.name && item.dueDate === toDoItem.dueDate)
    );
  }
}
