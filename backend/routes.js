const express = require('express')
const routes = express.Router()


routes.get('/', (req, res)=>{
    res.json({mensaje:"Hola"})
})

routes.get('/entrada', (req, res)=>{
    res.json({mensaje:"Aca deberia estar la entrada xd"})
})

module.exports=routes
