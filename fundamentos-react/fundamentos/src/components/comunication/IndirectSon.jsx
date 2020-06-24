import React from 'react'

export default props => {
  const handleButtonClick = () => {
    props.onClick('Pedro', ageGenerator(), nerdGenerator())
  }
  
  const min = 50
  const max = 70

  const ageGenerator = () => parseInt(Math.random() * (max-min)) + min
  const nerdGenerator = () => Math.random() > 0.5

  return (
    <div>
      <div>
        Filho
      </div>

      <button onClick={handleButtonClick}>
        Fornecer Informações
      </button>
    </div>
  )
}