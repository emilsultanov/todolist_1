
import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class TodoHeader extends Component {
   render() {
      return (
         <div className="todoHeader mb-2">
            <form onSubmit={this.props.addTodo}>
               <InputGroup className="mb-3">
                  <FormControl
                     name="todoTitle"
                     placeholder='title...'
                     onChange={this.props.newTodo}
                     value={this.props.todo.todoTitle}
                  />
               </InputGroup>

               <InputGroup className="mb-3">
                  <FormControl
                     rows="5"
                     as="textarea"
                     aria-label="With textarea"
                     name="todoDesc"
                     placeholder='description...'
                     onChange={this.props.newTodo}
                     value={this.props.todo.todoDesc}
                  />
               </InputGroup>

               <button type="submit" className="btn btn-primary">
                  Add
					</button>
            </form>
         </div>
      );
   }
}
export default TodoHeader;



