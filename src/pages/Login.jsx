import React, { useState } from 'react'
import { loginUser } from '../Redux/User/Action'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const Login = () => {

  let [password,setpassword]=useState("")
  let [email,setemail]=useState("")

  let nav=useNavigate()
  let dispatch=useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    let user={
      email,
      password
    }
    dispatch(loginUser(user))
    nav('/')
  }
  return (
    <div>
      <Form className='w-25 m-auto mt-5' onSubmit={handleSubmit}>
      <h2 className='mt-5'>LOGIN</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your email" onChange={(e)=>setemail(e.target.value)} value={email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Password" onChange={(e)=>setpassword(e.target.value)} value={password} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Login