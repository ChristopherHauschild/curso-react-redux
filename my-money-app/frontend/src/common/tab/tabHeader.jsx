import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

import If from '../operator/if'

class TabHeader extends Component {
  render() {
    const { target, icon, label } = this.props
    const isSelected = this.props.tab.selected === target

    /*
      retorna elementos que o target é igual ao valor de
      visible no estado (ex: tabList, tabDelete)

      visible recebe com valor true os elementos
      passados como parâmetro (em billingCycle.jsx)
    */
    const visible = this.props.tab.visible[target]
    return (
      <If test={visible}>
        <li className={isSelected ? 'active' : ''}>
          <a
            href='javascript:;'
            data-toggle='tab'
            onClick={() => this.props.selectTab(target)}
            data-target={target}
          >
            <i className={`fa fa-${icon}`}></i> {label}
          </a>
        </li>
      </If>
    )
  }
}

const mapStateToProps = state => ({
  tab: state.tab
})

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)