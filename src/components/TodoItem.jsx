import React from 'react'

function TodoItem(props) {

const activityArry = props.activityArry
const setActivityArry = props.setActivityArry

const handleDelete =(deleteid)=>{
 var temparr = activityArry.filter(function(item){
    if(item.id===deleteid){
        return false
    }
    else{
        return true
    }

   
    
 })

setActivityArry(temparr)
}
  return (
     <div className='flex justify-between'>
    <p>{props.index+1}.{props.activity}</p>
    
    <button className='text-red-500' onClick={()=>handleDelete(props.id)}>Delete</button>
    </div>
  )
}

export default TodoItem