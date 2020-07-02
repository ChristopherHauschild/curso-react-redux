import React, { Component } from 'react'

import { connect } from 'react-redux'

import If from '../operator/if'

class TabContent extends Component {
  render() {
    const { id, children } = this.props
    const isSelected = this.props.tab.selected === id

    /*
      retorna elementos que o id é igual ao valor de
      visible no estado (ex: tabList, tabDelete)

      visible recebe com valor true os elementos
      passados como parâmetro (em billingCycle.jsx)
    */
    const visible = this.props.tab.visible[id]
    return (
      <If test={visible}>
        <div
          id={id}
          className={`tab-pane ${isSelected ? 'active': ''}`}
        >
          {children}
        </div>
      </If>
    )
  }
}

const mapStateToProps = state => ({
  tab: state.tab
})

export default connect(mapStateToProps)(TabContent)