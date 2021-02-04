import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

  state = {
    isShow: false
  }

  handleMouseEnter = () => {
    this.setState({ isShow: true })
  }

  handleMouseLeave = () => {
    this.setState({ isShow: false })
  }

  handleDelete = () => {
    this.props.deleteTodo(this.props.todo.id)
  }
  handleOnchange = (event) => {
    this.props.updateTodo(this.props.todo.id, event.target.checked)
  }
  render() {
    const { name, isDone } = this.props.todo
    const { isShow } = this.state
    return (
      <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <label>
          <input type="checkbox" checked={isDone} onChange={this.handleOnchange} />
          <span>{name}</span>
        </label>
        <button onClick={this.handleDelete} className="btn btn-danger" style={{ display: isShow ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
