
import React, { Component } from "react";
import { Card, Button, } from "react-bootstrap";

class TodoBody extends Component {
   render() {
      return (
         <div className="todoBody">
            {this.props.todoList.map((item, index) => (
               <Card
                  key={index}
                  className="mb-2"
                  data-name={item.todoTitle}
                  onClick={() => this.props.removeTodoItem(item.todoTitle)}
               >
                  <Card.Header>
                     <h5>{item.todoTitle}</h5>
                  </Card.Header>
                  <Card.Body>
                     <Card.Text>{item.todoDesc}</Card.Text>
                     <Button variant="success" className="mr-2">
                        Check
							</Button>
                     <Button
                        variant="danger"

                     >
                        Remove
                     </Button>
                  </Card.Body>
               </Card>
            ))}
         </div>
      );
   }
}

export default TodoBody;
