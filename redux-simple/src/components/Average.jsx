import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Average = props => {
  const { min, max } = props

  return (
    <Card title='Média dos Números' purple>
      <div className='Interval'>
        <span>
          <span>Resultado:</span>
          <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Average)