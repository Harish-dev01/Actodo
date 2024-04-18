import React from 'react'
import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from 'react-router-dom'

function Landing() {

    const data = useLocation()
    return(
        <>
        <div className="bg-black p-16">
    
    <div className="bg-[#EFEFEf] p-10 border rounded-md">
       {/* Header */}
    
        <Header name ={data.state.user}/>
    
        {/* Card */}
        <div className="flex justify-between gap-7 ">
         <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
         <Card bgcolor={"#FD6663"} title={"20 December"} subtitle={"14:02:34"}/>
         <Card bgcolor={"#FCA201"} title={"built Using"} subtitle={"React"} />
          
        </div>
    
        {/* TodoContainer */}
        
        < TodoContainer />
        </div>
        </div>        
         
        </>
      )
}

export default Landing