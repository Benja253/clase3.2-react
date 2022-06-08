import axios from "axios"
import { useEffect, useState } from "react"

const useApi = (userQuantity = 20) => {
  
  const [users, setUsers] = useState()

  useEffect(() => {
    const URL = `https://randomuser.me/api/?results=${userQuantity}`
    axios.get(URL)
      .then(res => setUsers(res.data.results))
      .catch(err => console.log(err))
  }, [])

  return users
}

export default useApi