import React from 'react'

import pupils from '../../data/pupils'

export default props => {

  // const pupilsLi = pupils.map((pupil) => {
  //   return (
  //     <li>
  //       {pupil.id}) {pupil.name} - {pupil.grade}
  //     </li>
  //   )
  // })

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>

        {pupils.map((pupil) => {
          const {id, name, grade} = pupil

          return (
            <li key={id}>
              {id}) {name} - {grade}
            </li>
          )
        })}

      </ul>
    </div>
  )
}