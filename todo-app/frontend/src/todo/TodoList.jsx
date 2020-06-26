import React from 'react'

import IconButton from '../template/IconButton'

export default props => {
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
            onClick={() => props.handleMarkAsDone(todo)}
            hide={todo.done}
          />
          <IconButton
            style='warning'
            icon='undo'
            // onClick={() =>} para passar parametro diferente do evento
            onClick={() => props.handleMarkAsPending(todo)}
            hide={!todo.done}
          />
          <IconButton
            style='danger'
            icon='trash-o'
            // onClick={() =>} para passar parametro diferente do evento
            onClick={() => props.handleRemove(todo)}
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