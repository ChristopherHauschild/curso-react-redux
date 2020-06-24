import React, { cloneElement } from 'react'

export default props => {
  const childrens = props.children

  return (
    <div>

      {/*
        mapeando elementos filhos de Family e retornando um clone
        dos mesmos, pois só tem acesso ao componente PAI
      */}

      {/*
        FamilyMembers tem acesso ao surname, passado pelo componente PAI
      */}

      {childrens.map((child, i) => {
        return cloneElement(child, { ...props, key: i })
      })}
    </div>
  )
}