import React from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import { useState } from 'react'
function TodoContainer() {

  const [activityArry,setActivityArry]=useState([

    {
      id:1,
      activity:"Go for a Walk "
    },
    {
      id:2,
      activity:"Take a Shower"
    }
    
    
    ])
  return (
   <div>
    <div className='flex gap-5 flex-wrap'>
       <AddTodoForm  activityArry={activityArry} setActivityArry={setActivityArry}/>
        <TodoList activityArry={activityArry} setActivityArry={setActivityArry} />
    </div>
   </div>
  )
}

export default TodoContainer