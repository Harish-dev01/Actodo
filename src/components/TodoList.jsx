import React from 'react'
import TodoItem from './TodoItem'
function TodoList(props) {

  const activityArry=props.activityArry
  const setActivityArry=props.setActivityArry

  return (
    <div className='bg-[#BDB4EA] border rounded-md p-2 flex-grow  '> 
    <h1 className='text-2xl font-medium'>Today's Activity</h1>
  
     {activityArry.length===0?  <p className='text-red-500'>you haven't added anything yet</p>:""}
     {
      activityArry.map(function(item,index){
        return <TodoItem id={item.id} activity={item.activity} index={index} activityArry={activityArry}  setActivityArry={setActivityArry}/>
      })
     }
    
    
    </div>
  )
}

export default TodoList