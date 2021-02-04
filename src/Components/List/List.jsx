import React, { Component } from 'react'
import Item from '../Item/Item'
import PropTypes from 'prop-types'
import './index.css'
export default class List extends Component {

  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
  }
  render() {
    const { todoList, deleteTodo, updateTodo } = this.props
    return (
      <ul className="todo-main">
        {todoList.map((todo) => {
          return <Item key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}></Item>
        })}
      </ul>
    )
  }
}
