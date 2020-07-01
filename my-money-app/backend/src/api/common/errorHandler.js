const _ = require('lodash')

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    // extrai string, retornando apenas mensagem de erro
    const errors = parseErrors(bundle.errors)
    res.status(500).json({ errors })
  } else {
    next()
  }
}

const parseErrors = (nodeRestfulErrors) => {
  const errors = []
  // extraindo apenas mensagems de erro
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}