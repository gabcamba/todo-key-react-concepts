import React from "react";
import {
    Card, CardText, CardBody, Button, Row, Col
  } from 'reactstrap';

const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <Row>
            {/*<span>{todo}</span>
    <button onClick={deleteTodo.bind(this, todo)}>delete</button>*/}
        <Col sm="6" >

        <Card>
        <CardBody>
            <CardText>
                {todo}
            </CardText>
            <Button onClick={deleteTodo.bind(this, todo)}>Delete</Button>
        </CardBody>
    </Card>
        </Col>
            
        </Row>
    );
};

export default TodoItem;
