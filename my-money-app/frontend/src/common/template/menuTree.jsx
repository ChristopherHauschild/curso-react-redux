import React from 'react'

export default props => {
  const { icon, label, children } = props

  return (
    <li className='treeview'>
      <a href>
        <i className={`fa fa-${icon}`}></i> {label}
        <i className='fa fa-angle-right pull-right'></i>
      </a>
      <ul className='treeview-menu'>
        {children}
      </ul>
    </li>
  )
}