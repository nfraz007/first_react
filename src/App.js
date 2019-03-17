import React, { Component } from 'react';
import Todos from './components/Todos';
import TodoAdd from './components/TodoAdd';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "first task",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "second task",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "third task",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="container App" style={{paddingTop: "100px"}}>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <TodoAdd addTodo={this.addTodo}></TodoAdd>
            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}></Todos>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default App;
