import React from "react";
import { Card, CardText, CardBody, Button, Row, Col, CardTitle } from "reactstrap";

import './App.css'

const TodoItem = ({ todo, deleteTodo }) => {
    
    return (
        <div style={{marginTop: 20, alignContent: "center"}} className="col-sm-12 d-flex justify-content-center">
        <Card style={{alignContent:"center", color: "white", backgroundColor: '#333', borderColor: '#333' }}>

        
        <CardText>{todo}</CardText>
        <Button onClick={deleteTodo}>Delete</Button>
      </Card>
      </div>
    );
};

export default TodoItem;


