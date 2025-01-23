const TodoApp = require('./todo');

describe('TodoApp', () => {
    let app;

    beforeEach(() => {
        app = new TodoApp();
    });

    test('Add a new task', () => {
        app.addTask('Learn Jest');
        expect(app.getTasks()).toEqual([{ task: 'Learn Jest', completed: false }]);
    });

    test('Complete a task', () => {
        app.addTask('Learn Jest');
        app.completeTask(0);
        expect(app.getTasks()[0].completed).toBe(true);
    });

    test('Throw error for invalid task', () => {
        expect(() => app.addTask(123)).toThrow('Invalid task');
    });

    test('Throw error for invalid task index', () => {
        expect(() => app.completeTask(5)).toThrow('Invalid index');
    });
});