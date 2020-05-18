import React, { Component } from 'react'
import './Todo.scss'
class TodoCher extends Component {
   state={
     titre:''
   }
    onSubmit = (e) => {
    e.preventDefault();
    this.props.todoCher(this.state.titre);
    this.setState({ titre: '' });
  }
    onChange= (e)=>this.setState({ [e.target.name]:
    e.target.value});
    render() {
        return (
         <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.onSubmit}>
            <input  type="text" name="titre" className="inputText" placeholder="renseigner un item" value={this.state.titre} 
            onChange={this.onChange}  />
            <input type="submit" value="Submit" className="buttonadd"/>
          </form>
        </div>
      </div>
        );
    }
}

export default TodoCher;
