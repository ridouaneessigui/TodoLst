import React, { Component } from 'react'
import './Todo.scss'
import propTypes from 'prop-types'
class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

    render() {
        const{id,titre}=this.props.todo;
            return (
                <div style={this.getStyle()}>
                    <p>
                    <input type="checkbox" onChange={this.props.marKComplete.bind(this , id)}/> {' '}
                    {titre}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
                         x
                    </button>
                    </p>
                </div>
            );
    }
}

TodoItem.propTypes={
    todo:propTypes.object.isRequired
}
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default TodoItem;

