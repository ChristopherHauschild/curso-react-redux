import React from 'react'

export default props => {
  const { buttonColor, buttonLabel, buttonType, onClick } = props

  return (
    <button className={`btn btn-${buttonColor}`}
      onClick={onClick} type={buttonType}>
        {buttonLabel}
    </button>
  )
}