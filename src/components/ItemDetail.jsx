import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ItemDetail = ({productDetail}) => {
    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)
    const {name, description, price, stock, img, id} = productDetail
    const navegar = useNavigate()
    const {addItem} = useCart()
    
    const onAdd = () =>{
        let purchase = {
          id,
          name,
          price,
          stock,
          img,
          quantity:count
        }
        setCompra(true)
        addItem(purchase)
    }

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>
        <h2>Detalle de: {name}</h2>
        <img src={img} alt={name} style={{width:'25rem'}}/>
        <p>{description}</p>
        <p>${price}</p>
        { !compra 
        ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
        : <Stack spacing={2} direction="row" style={{display:'flex', justifyContent: 'space-around', alignItems:'center'}}>
            <Button variant="outlined" onClick={()=> navegar ('/')}>Seguir Comprando</Button>
            <Button variant="outlined" onClick={()=> navegar ('/cart')}>Ir al Carrito</Button>

          </Stack> }
    </div>
  )
}

export default ItemDetail