import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    let data = useSelector(store=>store.user)
  if(data.islogin){
    return children
  }
  else{
    return <Navigate to="/login"/>
  }
}

export default PrivateRoutes