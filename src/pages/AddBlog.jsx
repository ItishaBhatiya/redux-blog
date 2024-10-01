import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/Product/Action'
import { Button, Form } from 'react-bootstrap'

const AddBlog = () => {
  let[title,settitle]=useState("")
  let[img,setimg]=useState("")
  let[price,setprice]=useState("")

  let dispatch=useDispatch()

  const handlesubmit = (e)=>{
    e.preventDefault()
    let product={
      title,
      img,
      price,
      id:Date.now()
    }
    dispatch(addProduct(product))
    settitle("")
    setimg("")
    setprice("")
  }

  return (
    <div>
       <Form className='w-25 m-auto mt-5' onSubmit={handlesubmit}>
      <h2 className='mt-5'>PRODUCT</h2>
    <Form.Group className="mb-3 mt-5" controlId="formBasicTitle">
        <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>settitle(e.target.value)} value={title}/>
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicimg">
        <Form.Control type="url" placeholder="Enter Url" onChange={(e)=>setimg(e.target.value)} value={img} />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicPrice">
        <Form.Control type="number" placeholder="Enter price" onChange={(e)=>setprice(e.target.value)} value={price} />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="mt-2">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddBlog