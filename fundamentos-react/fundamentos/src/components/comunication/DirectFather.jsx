import React from 'react'

import DirectSon from './DirectSon'

export default props => {
  return (
    <div>
      <DirectSon
        text="Filho 01"
        age={20}
        nerd={false}
      />
      <DirectSon
        text="Filho 02"
        age={18}
        nerd={false}
      />
    </div>
  )
}