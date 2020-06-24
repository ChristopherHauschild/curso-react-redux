import React, { useState } from 'react'

export default props => {
  const [value, setValue] = useState('Inicial')

  const onInputChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
  }

  return (
    <div className="Input">
      <h2>{value}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <input value={value} onChange={onInputChange} />
        <input value={value} readOnly style={{ margin: '5px 0'}} />
        <input value={undefined} />
      </div>
    </div>
  )
}