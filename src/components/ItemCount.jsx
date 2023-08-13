import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ItemCount = ({initial, stock, onAdd, count, setCount}) => {

    

    const restar = () =>{
        if(count > initial){
            setCount(count-1)
        }
    }

    const sumar = () =>{
        if(count < stock){
            setCount(count+1)
        }
    }



  return (
    <>
    <Stack direction="row" spacing={3}>
        <Button variant="outlined" size="medium" onClick={restar}>-</Button> 
        <span>{count}</span>
        <Button variant="outlined" size="medium" onClick={sumar}>+</Button>
    </Stack>
    
    <Button variant="contained" size='mediuim'  onClick={onAdd}>comprar</Button>
    </>
  )
}

export default ItemCount