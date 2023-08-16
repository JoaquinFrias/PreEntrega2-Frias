import React from 'react'
import { useNavigate } from 'react-router-dom'
//import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({product}) => {
    const {id, img, name, description, price, stock} = product
    const navegar = useNavigate()

    return(
        <Card sx={{ width:'20rem', margin:'5rem' }}>
            <CardMedia
            sx={{ height: 300, marginBottom:'3px', backgroundSize:'cover' }}
            image={img}
            className='card-img' alt='name'
            />
            <CardContent className='cardContainer'>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ height: 100, display:'flex', justifyContent:'space-around', alignItems:'center' }}>
                    {description}
                </Typography>
                <Typography>
                    ${price}
                </Typography>
                <Typography>
                    queda {stock} unidades
                </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-around', alignItems:'center' }}>
                <Button size="medium" variant="outlined"  onClick={()=>navegar(`/detalle/${id}`)}>Ver Mas</Button>
            </CardActions>
        </Card>
   
    )
}

export default Item