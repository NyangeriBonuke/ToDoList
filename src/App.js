import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [activity, setActivity] = useState('')
  const [list, setList] = useState([])
  const [alert, setAlert] = useState('')

  const addToList = () => {
    if(activity !== ''){
      setList([...list, activity])
      setActivity('')
    }
    else{
      setAlert('Add Activity')
    }
  }

  useEffect(() => {
    if(alert){
      const timeOutId = setTimeout(() => {
        setAlert('')
      }, 3000)

      return () => clearTimeout(timeOutId)
    }
  }, [alert])

  const removeFromList = (index, item) => {
    const updatedList = [...list]
    updatedList.splice(index, 1)
    setList(updatedList)
    setAlert(`${item} deleted`)
  }
 
  return (
    <div className='todolist'>
      <div className='centertodolist'>
        <div className='listdiv'>
          <h3>To-do List</h3>
          <div className='divlist'>
            {
              list.map((item, index) => (
                <div className='itemlist'>
                  <p key={index}>{item}</p>
                  <div className='donedelete'>
                    <p className='done'>Done</p>
                    <p className='delete' onClick={() => removeFromList(index, item)}>Delete</p>
                  </div>
                </div>
              ))
            }
          </div>
          {alert && <p className='alert'>{alert}</p>}
        </div>
        <div className='addListdiv'>
          <h3>Add Activity To The List</h3>
          <input type='text' value={activity} onChange={(e) => setActivity(e.target.value)} />
          <button onClick={addToList}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default App
