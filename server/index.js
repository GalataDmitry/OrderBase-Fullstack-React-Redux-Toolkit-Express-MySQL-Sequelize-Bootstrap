const express = require('express')
const cors = require('cors')
const router = require('./router/router')
const dbConnect = require('./sequelizeConnect/sequelizeConnect')

const app = express()
const PORT = 5000
app.use(cors({
    origin: 'http://localhost:3040'
    // origin: 'http://192.168.0.5:3000'
}))
app.use(express.json())

dbConnect()

app.listen(PORT,error => error ?
    console.log('error --->', error) :
    console.log(`server run on PORT ${PORT}`)
)

app.use('/api', router)