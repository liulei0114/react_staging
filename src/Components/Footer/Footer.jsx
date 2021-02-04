import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

  getIsDoneCount = () => {
    // 当全部选中，checkbox为选中状态
    return this.props.todoList.reduce((pre, item) => item.isDone ? pre += 1 : pre += 0, 0)

  }
  getCount = () => {
    return this.props.todoList.length
  }
  isCheck = () => {
    if (this.props.todoList.length !== 0 && this.getIsDoneCount() === this.props.todoList.length) {
      return true
    }
    else {
      return false
    }
  }
  handleOnchange = (event) => {
    this.props.updateTodoAll(event.target.checked)
  }
  handleDeleteAll = () => {
    this.props.deleteAllTodo()
  }
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={this.isCheck()} onChange={this.handleOnchange} />
        </label>
        <span>
          <span>已完成{this.getIsDoneCount()}</span> / 全部{this.getCount()}
        </span>
        <button className="btn btn-danger" onClick={this.handleDeleteAll}>清除已完成任务</button>
      </div>
    )
  }
}
