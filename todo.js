

class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
        return this.todos.length - 1; // return index of added todo
    }

    remove(index) {
        if (index >= 0 && index < this.todos.length) {
            const removed = this.todos.splice(index, 1);a
            return removed[0];
        }
        return undefined;
    }

    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo;
            return true;
        }
        return false;
    }

    getAll() {
        return [...this.todos];
    }

    get(index) {
        if (index >= 0 && index < this.todos.length) {
            return this.todos[index];
        }
        return undefined;
    }

    clear() {
        this.todos = [];
        return true;
    }
}

module.exports = Todo;