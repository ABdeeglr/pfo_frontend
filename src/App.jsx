import { useState, useEffect } from 'react'
import axios from 'axios'
// import Note from './components/Note'
import Consumption from './components/Consumption'

const App = () => {

  const [data, setData] = useState([])
  console.log("Rendering...:", data)


  useEffect(() => {
    axios
      .get('http://192.168.2.27:3001/api/user_consumption/1')
      .then(response => response.data)
      .then(data => setData(data))
  }, [])


  return (
    <div>
      <h1>Hello PFO Professional Version</h1>
      <Consumption />
    </div>
  )
}

export default App