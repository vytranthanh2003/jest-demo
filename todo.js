class TodoApp {
    constructor() {
        this.todos = [];
    }

    addTask(task) {
        if (!task || typeof task !== 'string') throw new Error("Invalid task");
        this.todos.push({ task, completed: false });
    }

    completeTask(index) {
        if (index < 0 || index >= this.todos.length) throw new Error("Invalid index");
        this.todos[index].completed = true;
    }

    getTasks() {
        return this.todos;
    }
}

module.exports = TodoApp