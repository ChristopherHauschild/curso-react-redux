import React from 'react'

import Grid from '../layout/grid'

export default props => {
  const { cols, color, value, text, icon } = props

  return (
    <Grid cols={cols}>
      <div className={`small-box bg-${color}`}>
        <div className='inner'>
          <h3>{value}</h3>
          <p>{text}</p>
        </div>

        <div className='icon'>
          <i className={`fa fa-${icon}`}></i>
        </div>
      </div>
    </Grid>
  )
}