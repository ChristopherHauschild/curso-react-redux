import React from 'react'

import './Card.css'

export default ({ title, color, children } ) => {

  const CardStyle = {
    backgroundColor: color || '#F00',
    borderColor: color || '#F00'
  }

  return (
    <div className="Card" style={CardStyle}>
      <div className="Title">{title}</div>
      <div className="Content">
        {children}
      </div>
    </div>
  )
}