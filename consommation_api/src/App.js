import react, { useEffect, useState } from  'react'
import axios from "axios"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { delet_data, get_data } from './redux/Action';
import Update_product from './Update_product';
function App() {
  const product = useSelector(state =>
    state.product    
  ) 
  const dispatch= useDispatch()
  console.log(product)
  useEffect(()=>{
    dispatch(get_data())
  },[])
  
  return (
    <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
      {
        product.map(e=>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
         {e.description}
        </Card.Text>
        {e.price}
        <Button onClick={()=>dispatch(delet_data(e.id))}    >Delete</Button>  
         <Update_product id={e.id}/>
            </Card.Body>
    </Card>
    )
      }
      
    </div>
  );
}

export default App;
