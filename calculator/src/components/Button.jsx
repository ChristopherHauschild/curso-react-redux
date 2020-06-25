import React from 'react'

import './Button.css'

export default props => {
  const { label, double, triple, operation, click } = props

  let classes = 'button '
  classes += double ? 'double' : ''
  classes += triple ? 'triple' : ''
  classes += operation ? 'operation' : ''

  // Sempre que botao for clicado, pega o conteúdo de HTML
  return (
    <button
    onClick={e => click && click(label)}
    className={classes}>
      {label}
    </button>
  )
}