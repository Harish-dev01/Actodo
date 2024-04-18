
 import Login from "./Pages/Login";
 import Signup from "./Pages/Signup";
 import Landing from "./Pages/Landing";
 import {router, Route, Link, BrowserRouter, Routes} from "react-router-dom";
  import { useState } from "react";
 const App=()=>{


  const [users,setusers]=useState(
      [
          {
              username:"harish",
              password:"123"
          }
      ]
  )

return(
  <>
  <BrowserRouter>
 
  <Routes>
   <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
   <Route path='/signup' element={<Signup  users={users} setusers={setusers} />}></Route>
   <Route path='/landing' element={<Landing />}></Route>
  </Routes>
  </BrowserRouter>
  
  </>
)

}


 export default App
