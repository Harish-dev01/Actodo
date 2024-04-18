import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Login =(props)=> {

  const navigate = useNavigate();

const [eusername,setEusername]=useState()
const [epassword,setEpassword]=useState()
const [ruser,setRuser]=useState(true)


 

const users = props.users
const setusers=props.setusers

 const checkuser =()=>{

 
 
  let userfound = false
    
   users.forEach(function(item){
    if(item.username === eusername && item.password === epassword){
        console.log("login success")
        userfound = true
        navigate('/landing', {state:{user:eusername}});

        
    }
    
   })

   if(userfound===false){
    console.log("fail")
    setRuser(false)

   }

 }

 const handleUInput = (evt) =>{
    setEusername(evt.target.value)
 }

 const handlePInput =(evt)=>{
    setEpassword(evt.target.value)
 }

  return (
    <div className='bg-black p-10'>
    <div className='bg-[#EFEFEF] p-10 border rounded-md'>
       <h1 className='text-3xl font-medium'>Hey Hi</h1>
         {
            ruser?<p>I help you manage your activities after you login :)</p>:<p className='text-red-500'>Please Signup Before Login!!</p>
         }    
     
       
       <div className='flex flex-col gap-2 my-2'>
           <input type='text' className='w-52 border-black p-1 bg-transparent border rounded-md'
           onChange={handleUInput}
           placeholder='Username '></input>

<input type='text' className='w-52 border-black p-1 bg-transparent border rounded-md'
            onChange={handlePInput}
            
            placeholder='Password '></input>

              <button className='bg-[#8272DA] w-24 p-1 rounded-md'
              onClick={checkuser}>
               Login
             </button>
             <p>Don't have an account? <Link to={"/signup"} className='text-red-500'>Signup</Link> </p>
       </div>

       
       </div>   
       
</div>
  )
}

export default Login