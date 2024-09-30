import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './componetns/Header'
const App = () => {
  const [status , setStatus] = useState("")
  return (
    <div>
      {/* {
        //ternary operator 
        status === "logout" ? <div>
         <button>Login</button>
          </div> :
          <div>
            <button>Logout</button>
          </div>
      } */}



      {/* {status && <div>all products</div>} */}
      <Header/>
   <Outlet/>


    </div>
  )
}

export default App
