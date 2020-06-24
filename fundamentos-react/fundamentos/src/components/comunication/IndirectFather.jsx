import React, { useState } from 'react'

import IndirectSon from './IndirectSon'

export default props => {
  const [name, setName] = useState('?')
  const [age, setAge] = useState(0)
  const [nerd, setNerd] = useState(false)

  const sendInfo = (name, age, nerd) => {
    setName(name)
    setAge(age)
    setNerd(nerd)
  }

  return (
    <div>
      <div>
        <span> {name} </span> -
        <span> {age} </span> -
        <span> {nerd ? 'Verdadeiro' : 'Falso'} </span>
      </div>
      
      {/*
        Quando onCLick for acionado em IndirectSon,
        sendInfo é realizada
      */}

      <IndirectSon onClick={sendInfo} />
    </div>
  )
}