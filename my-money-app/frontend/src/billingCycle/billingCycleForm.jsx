import React, { Component } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'

import labelAndInput from '../common/form/labelAndInput'
import ActionButton from '../common/template/actionButton'
import ItemList from './itemList'
import Summary from './summary'

// reduxForm -> equivalente ao connect, para conectar os forms
// Field -> controla campos do form

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v
    return {
      // mapeando valores de credits e debts para somar e retornar o total
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    }
  }

  render() {
    // método do reduxForm
    const { handleSubmit, readOnly, credits, debts, submitClass, submitLabel, init } = this.props
    const { sumOfCredits, sumOfDebts } = this.calculateSummary()
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            cols='12 6'
            label='Nome'
            placeholder='Informe o nome...'
            type='text'
            component={labelAndInput}
            readOnly={readOnly} />
          <Field
            name='month'
            cols='12 3'
            label='Mês'
            placeholder='Informe o mês...'
            type='number'
            component={labelAndInput}
            readOnly={readOnly} />
          <Field
            name='year'
            cols='12 3'
            label='Ano'
            placeholder='Informe o ano...'
            type='number'
            component={labelAndInput}
            readOnly={readOnly} />

          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          
          <ItemList cols='12 6' readOnly={readOnly} list={credits}
            field='credits' legend='Créditos' />

          <ItemList cols='12 6' readOnly={readOnly} list={debts}
            field='debts' legend='Débitos' showStatus={true} />
        </div>
        <div className='box-footer'>
          {/* onClick já definido a partir do type submit */}
          <ActionButton
            buttonType='submit'
            buttonColor={submitClass}
            buttonLabel={submitLabel}
          />
          
          <ActionButton
            buttonType='button'
            buttonColor='default'
            buttonLabel='Cancelar'
            onClick={init}
          />
        </div>
      </form>
    )
  }
}

// destroyOnUnmount: false -> mantém dados do form para serem reutilizados
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')

// extrai lista de créditos do formulário e atribui à 'credits'
const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)