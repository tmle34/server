const express = require('express'),
    cors = require('cors'),
    Routers = require('./router/router'),
    PORT = process.env.PORT || 5000
    require('./mongoosConnection')

const app = express()
app.use(express.static('public'))
app.set("view engine", 'ejs')
app.use(cors())
app.use(express.json())
app.use(Routers)


app.listen(PORT,() =>{
    console.log(`server started on port`,PORT)
})