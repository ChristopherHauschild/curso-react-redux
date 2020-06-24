/*
  <If test={exp}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
  <If>
*/

/*
  Caso props test estaja setada, de acordo com o solicitado,
  rendeeriza filhos do componente IF, se nao, retorna
  false
*/

export default props => {
  const elseChild = props.children.filter(child => {
    return child.type && child.type.name === 'Else'
  })[0]

  const ifChildren = props.children.filter(child => {
    return child !== elseChild
  })

  if(props.test) {
    return ifChildren
  } else if(elseChild) {
    return elseChild
  } else {
    return elseChild
  }
}

export const Else = props => props.children