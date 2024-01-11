export default class Project {
  constructor(name) {
    this.name = name;
    this.todoItems = [];
  }
  get() {
    return { name: this.name, todoItems: this.todoItems };
  }
  set(name, todoItems) {
    this.name = name;
    this.todoItems = todoItems;
  }
  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
  }
  removeTodoItem(todoItem) {
    this.TodoItem = this.todoItems.filter(
      (item) =>
        !(item.name === todoItem.name && item.dueDate === todoItem.dueDate)
    );
  }
}
