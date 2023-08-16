import React from 'react'
import { useCart } from '../context/CartContext'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const CartItem = ({compra}) => {
    const{removeItem}=useCart()
    return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'90%'}}>'
        <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
        <span>{compra.name}</span>
        <span>{compra.quantity}</span>
        <span>{compra.price}</span>        
            <Button variant="outlined" startIcon={<DeleteIcon/>} color="error" onClick={()=>removeItem(compra.id)}>Borrar</Button>
        
    </div>
    )
}

export default CartItem