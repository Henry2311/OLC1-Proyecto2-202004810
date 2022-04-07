const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.set('port', process.env.PORT || 9000)

app.use(express.json())
app.use(cors())
app.use(morgan())

app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})

app.use('/',routes)