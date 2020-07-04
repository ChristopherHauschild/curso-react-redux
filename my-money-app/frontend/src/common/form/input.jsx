import React from 'react'

export default props => {
  const { input, placeholder, readOnly, type } = props

  return (
    <input {...input}
      className='form-control'
      placeholder={placeholder}
      readOnly={readOnly}
      type={type}/>
  )
}