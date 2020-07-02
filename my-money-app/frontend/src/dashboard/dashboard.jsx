import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getSummary } from './dashboardActions' 

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary()
  }

  /*
   sem utilização do Redux:

   state é setado a partir da requisição, que contém
   propriedades de mesma estrutura das definidas no state

   componentWillMount() {
     axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(res => this.setState(res.data))
   }
  */

  render() {
    const { credit, debt } = this.props.summary

    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox
              cols='12 4'
              color='green'
              icon='bank'
              value={`R$ ${credit}`}
              text='Total de Créditos'
            />
            <ValueBox
              cols='12 4'
              color='red'
              icon='credit-card'
              value={`R$ ${debt}`}
              text='Total de Débitos'
            />
            <ValueBox
              cols='12 4'
              color='blue'
              icon='money'
              value={`R$ ${credit - debt}`}
              text='Valor Consolidado'
            />
            </Row>
        </Content>
      </div>
    )
  }
}

/* 
  criando summary local com dados contidos na prop summary
  do dashboard, declarado em reducers
*/
const mapStateToProps = state => ({
  summary: state.dashboard.summary
})

/*
  ligação entre actionsCreators com dispatch

  sempre que método getSummary for chamado, será
  realizado um dispatch para todos os states
*/
const mapDispatchToProps = dispatch => (
  bindActionCreators({ getSummary }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)