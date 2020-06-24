import React, { useState } from 'react'

import { numbersGenerator } from '../../helpers/numbersGenerator'

import './Mega.css'

export default props => {
  const initalNumbers = Array(props.quant || 6).fill(0)

  const [numbers, setNumbers] = useState(initalNumbers)
  const [quant, setQuant] = useState(props.quant || 6)

  const handleNumbers = () => {
    setNumbers(numbersGenerator(quant))
  }

  const handleChangeQuant = (event) => {
    setQuant(+event.target.value)
  }
  
  return (
    <div>
      <h2>Mega</h2>

      <h2>{numbers.join(' ')}</h2>

      <div className="Mega">
        <label htmlFor="quantity">Quantidade:</label>
        <input min="6" max="15" id="quantity" type="number" value={quant} onChange={handleChangeQuant} />
      </div>

      <button onClick={handleNumbers}>
        Gerar Números
      </button>
    </div>
  )
}