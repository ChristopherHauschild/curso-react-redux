import React from 'react'
import Grid from '../layout/grid'

export default props => {
  const { cols, name, label, placeholder, readOnly, type } = props

  return (
    <Grid cols={cols}>
      <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <input
          {...props.input}
          className='form-control'
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
        />
      </div>
    </Grid>
  )
}