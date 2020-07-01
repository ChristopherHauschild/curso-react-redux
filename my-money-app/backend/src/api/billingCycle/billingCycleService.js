const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

/* 
  new -> retorna objeto atualizado
  runValidators -> aplica validações do mongoose ao método put
*/

BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if(error) {
      res.status(500).json({ erros: [error] })
    } else {
      res.json({ value })
    }
  })
})

BillingCycle.route('summary', (req, res, next) => {
  BillingCycle.aggregate([{
      // projetando novos campos a partir da soma de valores
      $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
  }, {
      // soma todos os dados obtidos no project em único registro
      $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
  }, {
     // definindo campos que serão projetados 
      $project: {_id: 0, credit: 1, debt: 1}
  }], (error, result) => {
      if(error) {
          res.status(500).json({ errors: [error] })
      } else {
          res.json(result[0] || { credit: 0, debt: 0 })
      }
  })
})

module.exports = BillingCycle

/*
  rotas são automaticamente mapeadas em routes.js
*/