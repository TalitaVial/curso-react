import React, { useState } from 'react'

import Tasks from './components/Tasks'
import './App.css'

const App = () => {
  // let msg = "Hello talita";
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar React',
      completed: false
    },
    {
      id: '2',
      title: 'Ler Documentação',
      completed: true
    }
    
  ])

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
      ;
    </>
  )
}

export default App
