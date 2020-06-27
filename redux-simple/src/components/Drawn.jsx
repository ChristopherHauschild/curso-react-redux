import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Drawn = props => {
  const { min, max } = props

  const aleatory = parseInt(Math.random() * (max - min)) + min

  return (
    <Card title='Sorteio de Números' purple>
      <div className='Interval'>
        <span>
          <span>Resultado:</span>
          <strong>{aleatory}</strong>
        </span>
      </div>
    </Card>
  )
}

// mapeia estado para as propriedades do componente
const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Drawn)