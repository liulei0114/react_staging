import React, { Component } from 'react'
import MyHeader from './Components/Head/Head'
import List from './Components/List/List'
import Footer from './Components/Footer/Footer'
import './App.css';

export default class App extends Component {

  // 初始化状态
  state = {
    todoList: [
      { id: '001', name: '吃饭', isDone: true },
      { id: '002', name: '睡觉', isDone: true },
      { id: '003', name: '敲代码', isDone: false },
    ]
  }

  addTodo = (todo) => {
    let newTodoList = [...this.state.todoList]
    newTodoList.unshift(todo)
    this.setState({ todoList: newTodoList })
  }

  // 删除todo
  deleteTodo = (id) => {
    let newTodo = this.state.todoList.filter((item) => {
      return item.id !== id
    })
    this.setState({ todoList: newTodo })
  }

  // 更改状态
  updateTodo = (id, isDone) => {
    let newTodoList = this.state.todoList.map(item => {
      if (item.id === id) return { ...item, isDone }
      else return item
    })
    this.setState({ todoList: newTodoList })
  }
  // 更新全部状态
  updateTodoAll = (isDone) => {
    let newTodo = this.state.todoList.map(item => { return { ...item, isDone } })
    this.setState({ todoList: newTodo })
  }

  // 删除所有已完成todo
  deleteAllTodo = () => {
    let newTodo = this.state.todoList.filter((item) => { return !item.isDone })
    this.setState({ todoList: newTodo })
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <MyHeader addTodo={this.addTodo}></MyHeader>
          <List todoList={this.state.todoList} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}></List>
          <Footer todoList={this.state.todoList} updateTodoAll={this.updateTodoAll} deleteAllTodo={this.deleteAllTodo}></Footer>
        </div>
      </div>
    );
  }

}


