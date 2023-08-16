import React from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Cart = () => {

  const {cart, cartTotal, clear} = useCart()
  const navegar = useNavigate()
  console.log(cart);
  
  return (
    <div>
      {
        !cart.length
        ?<div>
          <h2>Tu Carrito esta vacio</h2>
          <h4>Te invitamos a ver nuestros productos</h4>
          <Button variant="outlined" onClick={()=>navegar('/')}>Ir a comprar</Button>
        </div>
        :<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h2>Tu Carrito</h2>
            {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
            <span>Total a Pagar : ${cartTotal()}</span>
            <Stack spacing={2} direction="row" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem'}}> 
              <Button variant="outlined" onClick={clear}>Vaciar Carrito</Button>
              <Button variant="outlined" onClick={()=>navegar('/Checkout')}>Terminar Compra</Button>
            </Stack>
        </div>
      }      
    </div>
  )
}

export default Cart