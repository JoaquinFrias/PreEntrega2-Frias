import React from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'

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
          <button onClick={()=>navegar('/')}>Ir a comprar</button>
        </div>
        :<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h2>Tu Carrito</h2>
            {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
            <span>Total a Pagar : ${cartTotal()}</span>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem'}}>
              <button onClick={clear}>Vaciar Carrito</button>
              <button onClick={()=>navegar('/Checkout')}>Terminar Compra</button>
            </div>
        </div>
      }      
    </div>
  )
}

export default Cart