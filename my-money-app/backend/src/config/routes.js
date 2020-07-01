const express = require('express')

module.exports = function(server) {

  // definindo URL base para rotas
  const router = express.Router()
  
  server.use('/api', router)

  // rotas de Ciclo de Pagamento
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  
  // registrando web services rest dentro da rota /billingCycles
  BillingCycle.register(router, '/billingCycles')

}