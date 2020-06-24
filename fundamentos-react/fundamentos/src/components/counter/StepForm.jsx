import React from 'react'

export default props => {
  const setStep = (event) => {
    props.onStep(+event.target.value)
  }

  // OU

  /*
    onChange={e => props.onStep(+event.target.value}
  */

  return (
    <div>
      <label htmlFor="stepInput">Passo: </label>
      <input
        id="stepInput"
        type="number"
        value={props.step}
        onChange={setStep}
      />
    </div>
  )
}