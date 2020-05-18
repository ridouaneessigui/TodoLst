import React, { Component } from 'react'
import './Todo.scss'
import TodoItem from './TodoItem'
import propTypes from 'prop-types'
class Todo extends Component {
    
    render() {
        return this.props.todos.map((todo)=>( 
                 <TodoItem  todo={todo}   key={todo.id} marKComplete={this.props.marKComplete} delTodo={this.props.delTodo} />
        ));
    }
}
Todo.propTypes={
    todos:propTypes.array.isRequired
}
export default Todo;
