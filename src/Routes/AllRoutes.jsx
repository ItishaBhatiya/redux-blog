import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddBlog from '../pages/AddBlog'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import PrivateRoutes from '../Components/PrivateRoutes'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <PrivateRoutes><Home/></PrivateRoutes>}/>
            <Route path='/product' element={<PrivateRoutes><AddBlog/></PrivateRoutes>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes