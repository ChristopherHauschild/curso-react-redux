const mongoose = require('mongoose')
mongoose.Promise = global.Promise // limpar advertência

module.exports = mongoose.connect('mongodb://localhost/todo')


