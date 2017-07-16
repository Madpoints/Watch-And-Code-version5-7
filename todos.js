var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log("Todo list empty");
        }
        for (var i = 0; i < this.todos.length; i++){
            var check;
            
            if (this.todos[i].completed === true){
                check = "(x)";
                console.log('Todo', i, ':', check, this.todos[i].todoText);
            }
            else {
                check = "( )";
                console.log('Todo', i, ':', check, this.todos[i].todoText);
            }
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

console.log("Display empty List");
todoList.displayTodos();

console.log("Add first item");
todoList.addTodo('item1');

console.log("Add second item");
todoList.addTodo('item2');

console.log("Mark off first item");
todoList.toggleCompleted(0);

console.log("Change first item");
todoList.changeTodo(0, "itemOne");

console.log("Delete first and second item");
todoList.deleteTodo(0);
todoList.deleteTodo(0);


