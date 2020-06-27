import React from 'react'
import { connect } from 'react-redux'
import { changeNumberMin, changeNumberMax } from '../actions/numbers'

import './Interval.css'

import Card from './Card'

const Interval = props => {
  const { min, max } = props

  
  return (
    <Card title='Intervalo de Números' red>
      <div className='Interval'>
        <span>
          <strong>Mínimo:</strong>
          <input
            type='number'
            value={min}
            onChange={e => props.changeMin(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
            type='number'
            value={max}
            onChange={e => props.changeMax(+e.target.value)}
          />
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

// mapeia actions creators para dentro das propriedades do componente
const mapDispatchToProps = dispatch => {
  return {
    changeMin(newNumber) {
      // action creator -> action
      const action = changeNumberMin(newNumber)
      dispatch(action)
    },
    changeMax(newNumber) {
      // action creator -> action
      const action = changeNumberMax(newNumber)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)