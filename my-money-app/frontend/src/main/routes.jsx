import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

// paths setadas na tag a do componente menu

export default props => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={AuthOrApp}>
        <IndexRoute component={Dashboard} />
        <Route path='billingCycles' component={BillingCycle} />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
  )
}