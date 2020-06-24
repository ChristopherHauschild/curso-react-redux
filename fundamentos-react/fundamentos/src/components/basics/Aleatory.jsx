import React from 'react'

export default function Aleatory({ min, max }) {
  const value = parseInt(Math.random() * (max - min)) + min

  return (
    <>
      <h2>Valor Aleatório</h2>

      <p>
        <strong>Mínimo: </strong> {min}
      </p>

      <p>
        <strong>Máximo: </strong> {max}
      </p>

      <p>
        <strong>Valor: </strong> {value}
      </p>
    </>
  )
}
