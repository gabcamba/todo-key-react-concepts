import React, { Component } from "react";

const TodoItem = ({todo, deleteTodo}) => {
    return (
        <div>
            <span>{todo}</span>
            <button onClick={() => deleteTodo(todo), console.log('inside todoitem component delete func!')}>delete</button>
        </div>
    );
};

export default TodoItem;
