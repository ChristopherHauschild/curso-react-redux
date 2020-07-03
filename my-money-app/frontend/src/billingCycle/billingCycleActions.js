import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList() {
  const req = axios.get(`${BASE_URL}/billingCycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: req
  }
}

export function create(values) {
  return submit(values, 'post')
}

export function update(values) {
  return submit(values, 'put')
}

export function remove(values) {
  return submit(values, 'delete')
}

function submit(values, method) {
  return dispatch => {
    // id torna método estático
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(res => {
        toastr.success('Sucesso', 'Operação realizada com sucesso!')
        dispatch(init())
      })
      .catch(e => {
        // lança todos os erros ocorridos
        e.response.data.errors.forEach(error => toastr.error('Erro', error))
      })
  }
}

export function showUpdate(billingCycle) {
  // middleware redux-multi permite utilizar array uma action
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    // initialize -> inicializa form com os dados passados como parâmetro
    initialize('billingCycleForm', billingCycle)
  ]
}

export function showDelete(billingCycle) {
  // middleware redux-multi permite utilizar array uma action
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    // initialize -> inicializa form com os dados passados como parâmetro
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}