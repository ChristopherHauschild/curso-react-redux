import React, { Component } from 'react'

import './Counter.css'

import Display from './Display'
import Buttons from './Buttons'
import StepForm from './StepForm'

class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    step: this.props.initialStep || 5
  }

  // constructor(props) {
  //   super(props)

  //   // 'CRAVANDO' this como instancia da função increment
  //   this.increment = this.increment.bind(this)
  // }

  // utilizar arrow para o this apontar para o objeto correto
  increment = () => {
    this.setState({
      number: this.state.number + this.state.step
    })
  }

  decrement = () => {
    this.setState({
      number: this.state.number - this.state.step
    })
  }

  setStep = (newStep) => {
    this.setState({
      // '+' altera valor String para Number
      step: newStep
    })
  }

  render() {
    return (
      <div className="Counter">
        <h2>Contador</h2>

        <Display number={this.state.number} />

        <StepForm step={this.state.step} onStep={this.setStep} />

        <Buttons onInc={this.increment} onDec={this.decrement} />
      </div>
    )
  }
}

export default Counter