import {createAsyncThunk, createReducer} from '@reduxjs/toolkit'

const initialState = {
    allClients: [],
    clientInfo: [],
    orderInfo: [],
    allClientInfo: [],
    clientId: 0,
    orderData: {},
    destroyData: {}
}

export const getAllClients = createAsyncThunk(
    'getAllClients',
    () => {
        return fetch('http://172.16.16.2:5000/api/get_all_clients')
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('fetch client error --->', error))
    }
)

export const getClientInfo = createAsyncThunk(
    'getClientInfo',
    (clientId) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientId})
        }
        return fetch('http://172.16.16.2:5000/api/get_client_info', options)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('fetch client info error --->', error))
    })

export const getOrderInfo = createAsyncThunk(
    'getOrderInfo',
    (clientId) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientId})
        }
        return fetch('http://172.16.16.2:5000/api/get_order_info', options)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('fetch client info error --->', error))
    }
)

export const getAllClientInfo = createAsyncThunk(
    'getAllClientInfo',
    (clientId) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientId})
        }
        return fetch('http://172.16.16.2:5000/api/get_all_client_info', options)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('fetch client info error --->', error))
    }
)

export const addClient = createAsyncThunk(
    'addClient',
    (clientData) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientData})
        }
        return fetch('http://172.16.16.2:5000/api/add_client', options)
            .then(response => {
                if (response.status === 200)
                    return fetch('http://172.16.16.2:5000/api/get_all_clients')
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error => console.log('fetch client error --->', error))
            }).catch(error => console.log('fetch client error --->', error))
    }
)

export const addOrder = createAsyncThunk(
    'addOrder',
    ({clientId, orderData},) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientId, orderData})
        }
        return fetch('http://172.16.16.2:5000/api/add_order', options)
            .then(response => {
                if (response.status === 200)
                    return fetch('http://172.16.16.2:5000/api/get_all_clients')
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error => console.log('fetch client error --->', error))
            }).catch(error => console.log('fetch order error --->', error))
    }
)

export const searchClient = createAsyncThunk(
    'searchClient',
    (clientName) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientName})
        }
        return fetch('http://172.16.16.2:5000/api/search_client', options)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('fetch search client error --->', error))
    }
)

export const changeClientInfo = createAsyncThunk(
    'changeClientInfo',
    (clientData) => {
        const {id} = clientData
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientData})
        }
        const options_1 = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientId: id})
        }
        return fetch('http://172.16.16.2:5000/api/change_client_info', options)
            .then(response => {
                if (response.status === 200)
                    return fetch('http://172.16.16.2:5000/api/get_all_client_info', options_1)
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error => console.log('fetch client info error --->', error))
            }).catch(error => console.log('fetch change client error --->', error))
    }
)

export const changeOrderInfo = createAsyncThunk(
    'changeOrderInfo',
    (orderData) => {
        const {clientId} = orderData
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({orderData})
        }
        const options_1 = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientId})
        }
        return fetch('http://172.16.16.2:5000/api/change_order_info', options)
            .then(response => {
                if (response.status === 200)
                    return fetch('http://172.16.16.2:5000/api/get_all_client_info', options_1)
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error => console.log('fetch client info error --->', error))
            }).catch(error => console.log('fetch change client error --->', error))
    }
)

export const destroyOrder = createAsyncThunk(
    'destroyOrder',
    (destroyData) => {
        const {id, clientId} = destroyData
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        }
        const options_1 = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientId})
        }
        return fetch('http://172.16.16.2:5000/api/destroy_order', options)
            .then(response => {
                if (response.status === 200)
                    return fetch('http://172.16.16.2:5000/api/get_all_client_info', options_1)
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error => console.log('fetch client info error --->', error))
            }).catch(error => console.log('fetch destroy order error --->', error))
    }
)

export const destroyClient = createAsyncThunk(
    'destroyClient',
    (clientId) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientId})
        }
        return fetch('http://172.16.16.2:5000/api/destroy_client', options)
            .then(response => {
                if (response.status === 200)
                    return fetch('http://172.16.16.2:5000/api/get_all_clients')
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error => console.log('fetch client error --->', error))
            }).catch(error => console.log('fetch destroy client error --->', error))
    }
)

export const isDone = createAsyncThunk(
    'isDone',
    (isDoneData) => {
        const {id, clientId, isDone} = isDoneData
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({isDone, id})
        }
        const options_1 = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({clientId})
        }
        return fetch('http://172.16.16.2:5000/api/is_done_order', options)
            .then(response => {
                if (response.status === 200)
                    return fetch('http://172.16.16.2:5000/api/get_all_client_info', options_1)
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error => console.log('fetch client info error --->', error))
            }).catch(error => console.log('fetch destroy order error --->', error))
    }
)

export const mainReducer = createReducer(initialState, (builder => {
    builder
        .addCase(addClient.fulfilled, (state, action) => {
            state.allClients = action.payload
        })
        .addCase(addOrder.fulfilled, (state, action) => {
            state.allClients = action.payload
        })
        .addCase(getAllClients.fulfilled, (state, action) => {
            state.allClients = action.payload
        })
        .addCase(getClientInfo.fulfilled, (state, action) => {
            state.clientInfo = action.payload
        })
        .addCase(getOrderInfo.fulfilled, (state, action) => {
            state.orderInfo = action.payload
        })
        .addCase(searchClient.fulfilled, (state, action) => {
            state.allClients = action.payload
        })
        .addCase(getAllClientInfo.fulfilled, (state, action) => {
            state.allClientInfo = action.payload
        })
        .addCase(changeClientInfo.fulfilled, (state, action) => {
            state.allClientInfo = action.payload
        })
        .addCase(changeOrderInfo.fulfilled, (state, action) => {
            state.allClientInfo = action.payload
        })
        .addCase(destroyOrder.fulfilled, (state, action) => {
            state.allClientInfo = action.payload
        })
        .addCase(destroyClient.fulfilled, (state, action) => {
            state.allClients = action.payload
        })
        .addCase(isDone.fulfilled, (state, action) => {
            state.allClientInfo = action.payload
        })
        .addCase('clientId', (state, action) => {
            state.clientId = action.payload
        })
        .addCase('orderData', (state, action) => {
            state.orderData = action.payload
        })
        .addCase('destroyData', (state, action) => {
            state.destroyData = action.payload
        })
}))