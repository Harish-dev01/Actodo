import React from 'react'
import { useState } from 'react'

function AddTodoForm(props) {
const activityArry=props.activityArry
const setActivityArry=props.setActivityArry

const [newactivity,setNewactivity]=useState()

const handleChange=(event)=>{
  setNewactivity(event.target.value)
}

const addActivity=()=>{
  setActivityArry([...activityArry,{id:activityArry.length+1,activity:newactivity}])

  setNewactivity([])
}

  return (
    <div> 
    <div className='flex flex-col gap-3'> 
    <h1 className='text-2xl font-medium'>Manage Activity</h1>
    <div>
        <input type='text' value={newactivity} onChange={handleChange} className='border border-black transparent' placeholder='Next Activity?'></input>
    <button className='bg-black text-white border border-black' onClick={addActivity}>Add</button>
    </div>
    </div>
</div>
  )
}

export default AddTodoForm