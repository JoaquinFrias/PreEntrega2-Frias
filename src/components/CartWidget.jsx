import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const{cartQuantity, cart} = useCart()
  return (
    <div>
        <ShoppingCartIcon/>
        <span>{cartQuantity() || ''}</span>
    </div>
  )
}

export default CartWidget