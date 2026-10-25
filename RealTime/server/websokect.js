const ws = require('ws')

const wss = new ws.Server(
    {
        port: 5000,
    },
    () => {
     console.log('Server started')
    }
)

wss.on('connection', function connection(ws) {
    ws.id = Date.now()
    ws.on('message', function (message) {
        message = json.parse(message)
        switch (message.event) {
            case 'message': 
             broadcastMessage(message)
            break;
            case 'connection' :
            broadcastMessage(message)
            break;
        }
        
    })
})

function broadcastMessage(message,id) {
    wss.clients.forEach(client => {
        if(client.id === id) {
            client.send(JSON.stringify(message))
        }    
    })
}

const message = {
    event: 'message/connection',
    id: 123,
    date: '21.01.2026',
    username: "Yura"
}