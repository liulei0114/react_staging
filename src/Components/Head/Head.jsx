import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import { nanoid } from 'nanoid'
export default class Head extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 回车事件
  handleKeyUp = (event) => {
    let { keyCode, target } = event;
    if (keyCode === 13 && target.value !== '') {
      let todo = { id: nanoid(), name: target.value, isDone: false }
      this.props.addTodo(todo)
      target.value = ''
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
