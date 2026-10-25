const express = require('express')
const cors = require('cors')
const events = require('events')
const Port = 5000

const emitter = new events.EventEmitter()

const app = express()

app.use(cors())
app.use(express.json())
app.get('/connect', (req,res) => {
    res.writeHead(200, {
        "connection" : "keep alive",
        "content-type" : 'text/event-stream',
        'cache-control' : 'no-cache'
    })
    emmiter.on("newMessage", (message) => {
        res.write(`data:: ${JSON.stringify(message)} \n\n`)
    })
})
app.post('/new-messages', (req,res) => {
     const message = req.body
     emitter.emit('newMessage', message)
     res.status(200)
})

app.listen(Port, () => console.log(`server stardet on port ${Port}`))