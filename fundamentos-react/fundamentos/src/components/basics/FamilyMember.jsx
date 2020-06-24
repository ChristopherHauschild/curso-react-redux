import React from 'react'

export default ({ name, surname }) => {
  // FamilyMembers tem acesso ao surname, passado pelo componente PAI
  return <div> {name} <strong>{surname}</strong> </div>
}