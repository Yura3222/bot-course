import React, { use, useRef } from 'react'

const WebSock = () => {
   const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const socket = useRef()
    const [connected, setConnected] = useState(false)
    const [username, setUsername] = useState('')

    function connect() {
         socket.current = new WebSocket('ws://localhost:5000')

       socket.current.onopen = () => {
          setConnected(true)
          const message = {
            event: 'connection',
            username,
            id: Date.now()
          }
          socket.current.send(JSON.stringify(message))
          
       }
       socket.current.onmessage = (event) => {
        const message = JSON.parse(event.data)
        setMessages(prev => [message, ...prev])
        
       }
       socket.current.onclose = () => {
        console.log("Socket is close")
       }
       socket.current.onerror = () => {
        console.log("Socket is error")
       }
    }


    const sendMessage = async () => {
          const message = {
            username,
            message: value,
            id: Date.now(),
            event: 'message'
          }
          socket.current.send(JSON.stringify(message))
          setValue('')
        
    }

    if(!connected) {
        return (
            <div>
                <div>
                    <input type='text' value={username} onChange = {e => setUsername(e.target.value)} placeholder='Enter your name'/>
                    <button onChange={connect}>Enter</button>
                </div>
            </div>
        )
    }

    return (
        <div>
           <div>
                 <div>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                    <button onClick={sendMessage}>Send</button>
                 </div>
                 <div>
                      {messages.map(mess => {
                        <>
                        <div key={mess.id}>
                            {mess.event === 'connection' ? 
                              <div>User {mess.username} connected</div>
                            : <div>{mess.username}. {mess.message}</div>
                            }
                        </div>
                        </>
                      })}
                 </div>
           </div>
        </div>
    )
}

export default WebSock