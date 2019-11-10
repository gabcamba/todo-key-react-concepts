import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const AddTodo = ({ handleChange, handleSubmit }) => {
    return (
        <div>
            <h1> todo list</h1>
            <div className="col-sm-12">
                <InputGroup onChange={handleChange}>
                    <InputGroupAddon addonType="append">
                        <Button onClick={handleSubmit}>Add Todo</Button>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
            </div>
        </div>
    );
};

export default AddTodo;
