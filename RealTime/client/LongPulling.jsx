import React from 'react'
import axios from "axios"


function LongPulling() {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
      subscribe()
    }, [])

    const subscribe = async () => {
        try {
            const {data} = await axios.get('http://localhost:5000/get-messages')
            setMessages(prev => [data, ...prev])
            await subscribe()
        } catch (e) {
            setTimeout(() => {
                subscribe()
            }, 500)
            
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