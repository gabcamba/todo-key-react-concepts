import React, { Component } from "react";

const TodoItem = ({todo, deleteTodo}) => {
    return (
        <div>
            <span>{todo}</span>
            <button onClick={deleteTodo}>delete</button>
        </div>
    );
};

export default TodoItem;
