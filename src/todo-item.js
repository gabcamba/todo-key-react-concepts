import React from "react";

const TodoItem = ({todo, deleteTodo}) => {
    return (
        <div>
            <span>{todo}</span>
            <button onClick={deleteTodo.bind(this, todo)}>delete</button>
        </div>
    );
};

export default TodoItem;
