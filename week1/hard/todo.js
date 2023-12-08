class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
    }

    remove(index) {
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1);
        } else {
            throw new Error('Index out of bounds');
        }
    }

    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo;
        } else {
            throw new Error('Index out of bounds');
        }
    }

    getAll() {
        return this.todos.slice(); 
    }

    get(index) {
        if (index >= 0 && index < this.todos.length) {
            return this.todos[index];
        } else {
            throw new Error('Index out of bounds');
        }
    }

    clear() {
        this.todos = [];
    }
}

const myTodoList = new Todo();

myTodoList.add('Buy groceries');
myTodoList.add('Read a book');
console.log(myTodoList.getAll()); 

myTodoList.update(0, 'Buy fresh groceries');
console.log(myTodoList.getAll()); 

myTodoList.remove(1);
console.log(myTodoList.getAll());

console.log(myTodoList.get(0)); 

myTodoList.clear();
console.log(myTodoList.getAll());
