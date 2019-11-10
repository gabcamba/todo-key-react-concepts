import React from "react";
import "./App.css";
import TodoItem from "./todo-item";

class TodoApp extends React.Component {
    state = {
        todos: ["todo1", "todo2"],
        todo: ""
    };

    deleteTodo = todo => {
        const index = this.state.todos.findIndex(todo => todo === todo);
        const newTodos = [...this.state.todos];
        newTodos.splice(index, 1);

        this.setState({
            todos: newTodos
        });
    };

    addTodo = e => {
        e.preventDefault();
        const todos = this.state.todos;
        const newTodo = e.target.value;
        todos.push(e.target.value);

        this.setState({
            todos: todos
        });
    };

    handleChange = e => {
      console.log('inside handle change!')
        const todo = e.target.value;
        this.setState({todo: todo}, console.log('inside handlechange setstate!'))
    };

    handleSubmit = e => {
      console.log('inside handle submit!')
      let newTodos = this.state.todos
      let todo = this.state.todo
      newTodos.push(todo)
      this.setState({todos: newTodos}, console.log('inside setstate!'))
    }

    render() {
      console.log("inside render!", this.state.todos)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        placeholder="new Todo"
                    ></input>
                    <input type="submit" value="Submit" />
                </form>

                {this.state.todos.map(todo => (
                    <TodoItem
                        key={todo}
                        todo={todo}
                        deleteTodo={this.deleteTodo}
                    />
                ))}
            </div>
        );
    }
}

export default TodoApp;
