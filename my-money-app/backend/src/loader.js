// carregando servidor
const server = require('./config/server')
// carregando banco de dados
require('./config/database')
// carregando rotas
require('./config/routes')(server)