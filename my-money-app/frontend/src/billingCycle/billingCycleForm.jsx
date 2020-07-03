import React, { Component } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'

import labelAndInput from '../common/form/labelAndInput'
import ActionButton from '../common/template/actionButton'

// reduxForm -> equivalente ao connect
// Field -> controla campos do form

class BillingCycleForm extends Component {
  render() {
    // método do reduxForm
    const { handleSubmit, readOnly, submitClass, submitLabel, init } = this.props

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

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)