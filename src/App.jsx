import React from 'react'
import Navbar from './Components/Navbar'
import AllRoutes from './Routes/AllRoutes'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  let data = useSelector((store)=>store)
  console.log(data);
  return (
    <div>
      <Navbar />
      <AllRoutes/>
    </div>
  )
}

export default App