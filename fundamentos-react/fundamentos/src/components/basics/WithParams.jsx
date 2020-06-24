import React from 'react'

export default function WithParams({ title, name, grade }) {
  
  const status = grade >= 7 ? 'Aprovado' : 'Reprovado'
  
  return (
    <div>
      <h2>{title}</h2>
      <p>
        <strong> {name} </strong>
        tirou a nota 
        <strong> {grade} </strong>
        e está
        <strong> {status}</strong>!
      </p>
    </div>
  )
}