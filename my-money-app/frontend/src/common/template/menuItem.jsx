import React from 'react'

export default props => {
  const { path, icon, label } = props

  return (
    <li>
      <a href={path}>
        <i className={`fa fa-${icon}`}></i> {label}
      </a>
    </li>
  )
}