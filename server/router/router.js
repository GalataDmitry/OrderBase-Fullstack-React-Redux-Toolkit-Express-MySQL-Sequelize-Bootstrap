const {Router} = require('express')
const {getAllClients, getClientInfo, getOrderInfo, addClient, addOrder, searchClient, getAllClientInfo, changeClientInfo, changeOrderInfo, destroyOrder, destroyClient, isDone} = require('../controllers/controllers')

const router = new Router()

router.get('/get_all_clients', getAllClients)
router.post('/get_client_info', getClientInfo)
router.post('/get_order_info', getOrderInfo)
router.post('/get_all_client_info', getAllClientInfo)
router.post('/add_client', addClient)
router.post('/add_order', addOrder)
router.post('/search_client', searchClient)
router.post('/change_client_info', changeClientInfo)
router.post('/change_order_info', changeOrderInfo)
router.post('/destroy_order', destroyOrder)
router.post('/destroy_client', destroyClient)
router.post('/is_done_order', isDone)

module.exports = router