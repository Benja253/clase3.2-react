import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CardUser from './components/CardUser'
import useApi from './hooks/useApi'

function App() {
  
  const users = useApi(15)

  console.log(users)

  return (
    <div className="App">
      {
        users?.map(user => (
          <CardUser 
            user={user}
            key={user.login.uuid}
          />
        ))
      }
    </div>
  )
}

export default App
