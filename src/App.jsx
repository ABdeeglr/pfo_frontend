import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log(response)
      })
  }

  /**
   * 接受一个参数，这个参数 promise 对象中的 data 属性
   * 代表了从服务器返回的数据
   * 该数据更新组件的 notes 状态
   * @param {*} response 
   */
  const __eventHandler = (response) => {
    console.log('promise fulfilled')
    setNotes(response.data)
  }
  
  const __effect_hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(__eventHandler)
    }
    
  useEffect(__effect_hook, [])

  console.log('render', notes.length, 'notes')

  return (
    <div>
      <h1>Empty</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note.content} />
        )}
      </ul>
    </div>
  )
}

export default App