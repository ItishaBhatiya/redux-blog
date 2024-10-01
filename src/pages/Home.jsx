import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT } from '../Redux/Product/ActionType'


const Home = () => {
  let {products} = useSelector(store=>store.product)
  let dispatch=useDispatch()
  
  const handleDelete = (id)=>{
    dispatch(DELETE_PRODUCT(id))
    // alert("Product deleted successfully")
  }
  return (
    <div>
      {
      products.map((ele)=>(
        <div key={ele.id}>
          <h2>{ele.title}</h2>
          <img src={ele.img} alt="error"  height="200px" width="200px"/>
          <p> $ {ele.price}</p>
          <button onClick={()=>handleDelete(ele.id)}>Delete</button>
        </div>
      ))}
      
    </div>
  )
}

export default Home