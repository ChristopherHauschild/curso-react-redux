import React from 'react'
import { Link } from 'react-router'

export default props => {
  const { path, icon, label } = props

  return (
    <li>
      <Link to={path}>
        <i className={`fa fa-${icon}`}></i> <span>{label}</span>
      </Link>
    </li>
  )
}