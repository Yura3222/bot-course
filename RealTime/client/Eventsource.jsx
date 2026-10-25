import React from 'react'
import axios from "axios"


function LongPulling() {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
      subscribe()
    }, [])

    const subscribe = async () => {
       const eventSource = new EventSource('http://localhost:5000/connect')
       eventSource.onmessage = function(event) {
             const message = JSON.parse(event.data)
             setMessages(prev => [message, ...prev])
       }
    }

    const sendMessage = async () => {
        axios.post('http://localhost:5000/new-messages',{
            message: value,
            id: Date.now()
        } )
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
                            {mess.message}
                        </div>
                        </>
                      })}
                 </div>
           </div>
        </div>
    )
}

export default LongPulling