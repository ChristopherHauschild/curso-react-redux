import React from 'react'

export default props => {
  const { test, children } = props

  if(test) {
    return children
  } else {
    return false
  }
}