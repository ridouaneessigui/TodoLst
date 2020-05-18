import React, { Component } from 'react'
import './App.css';
import Todo from './component/Todo';
import TodoCher from './component/TodoCher';
import { v1 as uuidv1 } from 'uuid';
class App extends Component{
  state={
          todos:[{
          id:uuidv1(),
          titre:'test',
          completed:true
          },
          {
          id:uuidv1(),
          titre:'test1',
          completed:false
          }]
    }
   marKComplete = (id)=>{
        this.setState({todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })});
    }
      delTodo = (id)=>{
        this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)] });
    }
  todoCher=(titre)=>{
    const newTodo={
      id:uuidv1(),
      titre,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]});
    
  }
  render(){
    return ( 
    <div>
      <h1>TodoList Ess</h1>
        <TodoCher todoCher={this.todoCher}/>
        <br />
        <Todo todos={this.state.todos} marKComplete={this.marKComplete} delTodo={this.delTodo}/>  
    </div>
    );
  }
}

export default App;