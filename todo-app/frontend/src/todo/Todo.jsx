import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3030/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = { description: '', list: [] }

    // this sempre será o componente atual - apontará para mesmo objeto
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
    
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    
    this.refresh()
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''

    // limpa form e renderiza lista novamente
    axios.get(`${URL}?sort=createdAt${search}`)
      .then(res => this.setState({
        ...this.state, description, list: res.data
      }))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleChange(e) {
    const newDescription = e.target.value

    this.setState({ ...this.state, description: newDescription })
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description })
      .then(res => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(res => this.refresh(this.state.description))
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(res => this.refresh(this.state.description))
  }
  
  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(res => this.refresh(this.state.description))
  }

  handleClear() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    )
  }
}