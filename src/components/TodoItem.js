import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: (this.props.todo.completed) ? 'line-through' : 'none'
        }
    }

  render() {
      const { id, title, completed } = this.props.todo;
    return (
      <div className="list-group-item" style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={(completed) ? true : false}></input> 
        {title}
        <button type="button" className="btn btn-danger btn-sm pull-right" onClick={this.props.deleteTodo.bind(this, id)}><i className="fa fa-times"></i></button>
      </div>
    )
  }
}

export default TodoItem
