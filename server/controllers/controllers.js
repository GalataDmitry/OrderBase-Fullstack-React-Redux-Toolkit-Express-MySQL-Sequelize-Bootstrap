const {Op} = require('sequelize')
const {Clients} = require('../models')
const {Orders} = require('../models')

const getAllClients = async (req, res) => {
    console.log('getAllClients controller WORK --------->>')
    try {
        const allClients = await Clients.findAll({
            include: Orders,
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 10
        })
        res.json(allClients)
    } catch (error) {
        console.log('add controller error --->', error)
        res.status(500)
    }
}

const getClientInfo = async (req, res) => {
    const {clientId} = req.body
    try {
        const clientInfo = await Clients.findOne({
            where: {id: clientId},
            attributes: ['phone', 'email', 'comment', 'createdAt']
        })
        res.json([clientInfo]).status(200)
    } catch (error) {
        console.log('add controller error --->', error)
        res.status(500)
    }
}

const getOrderInfo = async (req, res) => {
    const {clientId} = req.body
    try {
        const orderInfo = await Clients.findOne({
            where: {id: clientId}
        })
        const orders = await orderInfo.getOrders()
        res.json(orders).status(200)
    } catch (error) {
        console.log('add controller error --->', error)
        res.status(500)
    }
}

const addClient = async (req, res) => {
    const {client_name, phone, email, comment} = req.body.clientData
    parseInt(phone)
    try {
        const newClient = await Clients.create({client_name, phone, email, comment})
        res.json(newClient).status(200)
    } catch (error) {
        console.log('add controller error --->', error)
        res.status(500)
    }
}

const addOrder = async (req, res) => {
    const clientId = req.body.clientId
    const {order, comment} = req.body.orderData
    try {
        const newOrder = await Orders.create({order, comment, clientId})
        res.json(newOrder).status(200)
    } catch (error) {
        console.log('add order error --->', error)
        res.status(500)
    }
}

const searchClient = async (req, res) => {
    const {clientName} = req.body
    try {
        const searchClient = await Clients.findAll({
            where: {
                client_name: {
                    [Op.like]: `%${clientName}%`
                }
            },
            order: [
                ['createdAt', 'DESC']
            ],
            include: Orders,
            limit: 10
        })
        res.json(searchClient).status(200)
    } catch (error) {
        console.log('add order error --->', error)
        res.status(500)
    }
}

const getAllClientInfo = async (req, res) => {
    const {clientId} = req.body
    try {
        const allClientInfo = await Clients.findOne({
            where: {
                id: clientId
            },
            include: Orders
        })
        res.json([allClientInfo]).status(200)
    } catch (error) {
        console.log('add order error --->', error)
        res.status(500)
    }
}

const changeClientInfo = async (req, res) => {
    const {id, client_name, phone, email, comment} = req.body.clientData
    try {
        const changedClient = await Clients.update({client_name, phone, email, comment}, {
            where: {
                id
            }
        })
        res.json(changedClient).status(200)
    } catch (error) {
        console.log('add order error --->', error)
        res.status(500)
    }
}

const changeOrderInfo = async (req, res) => {
    const {id, order, comment} = req.body.orderData
    try {
        const changedOrder = await Orders.update({order, comment}, {
            where: {
                id
            }
        })
        res.json(changedOrder).status(200)
    } catch (error) {
        console.log('add order error --->', error)
        res.status(500)
    }
}

const destroyOrder = async (req, res) => {
    const {id} = req.body
    try {
        const destroyedOrder = await Orders.destroy({
            where: {
                id
            }
        })
        res.json(destroyedOrder).status(200)
    } catch (error) {
        console.log('add order error --->', error)
        res.status(500)
    }
}

const destroyClient = async (req, res) => {
    const {clientId} = req.body
    try {
        const destroyedClient = await Clients.destroy({
            where: {
                id: clientId
            }
        })
        res.json(destroyedClient).status(200)
    } catch (error) {
        console.log('add order error --->', error)
        res.status(500)
    }
}

const isDone = async (req, res) => {
    const {id, isDone} = req.body
    let done
    if (isDone) done = 0
    else done = 1
    try {
        const isDoneOrder = await Orders.update({isDone: done}, {
            where: {
                id
            }
        })
        res.json(isDoneOrder).status(200)
    } catch (error) {
        console.log('add order error --->', error)
        res.status(500)
    }
}

module.exports = {
    getAllClients,
    getClientInfo,
    getOrderInfo,
    getAllClientInfo,
    addClient,
    addOrder,
    searchClient,
    changeClientInfo,
    changeOrderInfo,
    destroyOrder,
    destroyClient,
    isDone
}