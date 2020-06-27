import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './todoActions'

import IconButton from '../template/IconButton'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>
          {todo.description}
        </td>
        <td>
          <IconButton
            style='success'
            icon='check'
            // onClick={() =>} para passar parametro diferente do evento
            onClick={() => props.markAsDone(todo)}
            hide={todo.done}
          />
          <IconButton
            style='warning'
            icon='undo'
            // onClick={() =>} para passar parametro diferente do evento
            onClick={() => props.markAsPending(todo)}
            hide={!todo.done}
          />
          <IconButton
            style='danger'
            icon='trash-o'
            // onClick={() =>} para passar parametro diferente do evento
            onClick={() => props.remove(todo)}
            hide={!todo.done}
          />
        </td>
      </tr>
    ))
  }

  const list = props.list || []

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)