import React, { Component } from 'react'

export class TodoAdd extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        if(e.key === "Enter"){
            this.props.addTodo(this.state.title)
        }
    }

  render() {
    return (
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Add todo ..." name="title" onChange={this.onChange} onKeyPress={this.onSubmit}></input>
      </div>
    )
  }
}

export default TodoAdd
