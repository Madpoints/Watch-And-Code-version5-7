var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log("Empty");
        }
        for (var i = 0; i < this.todos.length; i++){
            console.log('Todo', i, ':', this.todos[i].todoText);    
        }
        
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

todoList.displayTodos();
todoList.addTodo('item1');
todoList.addTodo('item2');
// todoList.toggleCompleted(0);
// todoList.changeTodo(0, "itemOne");
todoList.deleteTodo(0);
todoList.deleteTodo(0);


