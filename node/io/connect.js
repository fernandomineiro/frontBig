const io = require('socket.io')
const sockets = require('./sockets')
const knex = require('../db/knex')

const register = (socket) => {
    sockets[socket.telefone] = socket
}

const connect = (server) =>{
    const socketIo = io(server)
    socketIo.on('connect', socket => {
        sockets.io = socketIo
        socket.on('register', telefone => {
            if(sockets[telefone]){
                sockets[telefone].disconnect()
            }
            knex('membro').select('telefone', 'first_name').where({
                    telefone
                }).first().then(user => {
                    console.log("usuário:", user.first_name, "conectado!")
                    if(user.sala_id){
                        socket.join(sala_id)
                    }
                    socket.telefone = user ? user.telefone : user
                    register(socket)
                })
                .catch(err => {
                    console.log(err)
                    socket.telefone = null
                })
        })
        socket.on('sair da sala', salaId => {
            socket.leave(salaId)
        })
        socket.on('disconnect', () => {
            delete sockets[socket.telefone]
        })

        setTimeout(() => {
            if (!socket.telefone) {
                socket.disconnect()
            }
        }, 5000)
    })}

module.exports = connect