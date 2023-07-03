import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({counter}) => {

  return (
    <>
    <ShoppingCartIcon/>
    <span>{counter}</span>

    </>


  /*   <div>
        <span>🛒</span>
        <span>{counter}</span>
    </div> */

  )
}

export default CartWidget