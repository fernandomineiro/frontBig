const knex = require('./knex')
module.exports = (sala_id, dia, mes) => knex('partida1')
.insert({sala_id, dia, mes})
.then(_ => true)
.catch(err => ({err}))