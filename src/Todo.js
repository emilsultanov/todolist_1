import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";

class Todo extends Component {
   state = {
      todo: {
         todoTitle: "",
         todoDesc: ""
      },
      todoList: []
   };

   newTodo = (e) => {
      const { todo } = { ...this.state };
      const currentTodo = todo;
      const { name, value } = e.target;
      currentTodo[name] = value;
      this.setState({ todo: currentTodo });
   };

   addTodo = (e) => {
      e.preventDefault();
      const updatedTodo = [...this.state.todoList, this.state.todo];

      this.setState({
         todoList: updatedTodo,
         todo: {
            todoTitle: "",
            todoDesc: ""
         }
      });
   };

   removeTodoItem = (title) => {
      this.setState({
         todoList: this.state.todoList.filter(item => item.todoTitle !== title)
      });
      console.log(this.state.todoList)
   }

   render() {
      return (
         <div className="todo">
            <Container>
               <Row>
                  <Col>
                     <h1 className='text-center'>Todo list application</h1>

                  </Col>
               </Row>
               <Row className="justify-content-md-center">
                  <Col md={8} >
                     <TodoHeader
                        newTodo={this.newTodo}
                        addTodo={this.addTodo}
                        todo={this.state.todo}
                     />
                  </Col>
               </Row>
               <Row className="justify-content-md-center">
                  <Col md={8}>
                     <TodoBody
                        todoList={this.state.todoList}
                        removeTodoItem={this.removeTodoItem}
                     />
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }
}

export default Todo;
