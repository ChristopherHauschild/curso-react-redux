import React from 'react'

export default props => {
  const { text, age, nerd } = props
  return (
    <div>
      <span> {text} </span> -
      <span> {age} anos </span> -
      <span> {nerd ? 'Verdadeiro' : 'Falso'} </span>
    </div>
  )
}