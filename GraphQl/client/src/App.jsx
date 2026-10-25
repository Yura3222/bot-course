import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import {GET_ALL_USERS} from "./query/user"
import { useMutation, useQuery } from '@apollo/client/react';




function App() {

const [users, setUsers] = useState([])
const {data,loading,error, refetch} = useQuery(GET_ALL_USERS)
const {data: OneUser, loading: loadingOneUser} = useQuery(GET_ONE_USER, {
  variables: {
    id: 1
  }
})
const [newUser] = useMutation(CREATE_USER)
const [username, setUsername] = useState('')
const [age, setAge] = useState(0)

useEffect(() => {
    if(!loading) {
      setUsers(data.getAllUsers)
    }
}, [data])

if (loading) {
  return <h1>Loading...</h1>
}

const addUser = (e) => {
  e.preventDefault()
  newUser({
    variables: {
      input: {
        username, age
      }
    }
  }).then(({data}) => {
    console.log(data)
    setUsername('')
    setAge(0)
  })
}

const getAll = e => {
  e.preventDefault()
  refetch()
}




  return (
    <div>
       <form>
        <input value ={username} onChange={e => setUsername(e.target.value)} />
        <input value ={age} onChange={e => setAge(e.target.value)} />
        <div>
           <button onClick={e => addUser(e)}>Створити</button>
           <button onClick={e => getAll(e)}>Получити</button>

           <div>
            {users.map(
              user => 
                <div>{user.id}. {user.username} {user.age}</div>
            )}
           </div>
        </div>
       </form>
    </div>
  )
}

export default App
