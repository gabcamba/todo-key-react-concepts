import React from "react";
import "./App.css";

import TodoItem from "./todo-item";
import AddTodo from './AddTodoComponent';

class TodoApp extends React.Component {
    state = {
        todos: []
    };

    deleteTodo = todoNew => {
        const index = this.state.todos.findIndex(todo => todo === todoNew);
        const newTodos = [...this.state.todos];
        newTodos.splice(index, 1);

        this.setState({
            todos: newTodos
        });
    };

    addTodo = () => {
      console.log('inside add todo method!')
        const todos = this.state.todos;
        
        if(this.state.todo === '' || this.state.todo === undefined){
          alert("You can't add an empty todo, silly!")
        }else {
          todos.push(this.state.todo);
          this.setState({
            todos: todos
        });
        }
        
    };

    handleChange = e => {
        console.log("inside handle change!");
        const todo = e.target.value;
        this.setState(
            { todo },
            console.log("inside handlechange setstate!", this.state.todo)
        );
    };

    handleSubmit = e => {
        console.log("inside handle submit!");
        this.addTodo();
    };

    render() {
        console.log("inside render!", this.state.todo);
        return (
            <div className="main-content">
                <AddTodo handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

                {this.state.todos.map(todo => (
                    <TodoItem
                        key={todo}
                        todo={todo}
                        deleteTodo={this.deleteTodo.bind(this)}
                    />
                ))}
            </div>
        );
    }
}

export default TodoApp;
