import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { db } from '../firebase/firebase';
//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Checkout = () => {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [telefono, setTelefono] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [mostrarBoton, setMostrarBoton] = useState(false);
	const {cart, cartTotal, clear} = useContext(CartContext);


	const generarOrden = () => {
		if (nombre.length === 0) {
			return false;
		}

		if (email.length === 0) {
			return false;
		}

		if (telefono.length === 0) {
			return false;
		}

		const datosComprador = {name:nombre, phone:telefono,email:email}
		const items = cart.map(item =>({id:item.id, title:item.titulo, price:item.precio}))
		const fecha = new Date();
		const date = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
		const total = cartTotal();
		const order = {buyer:datosComprador}

		const db = getFirestore();
		const OrdenesCollection = collection(db, "orders");
        addDoc(OrdenesCollection, order).then(docRef => {
            setOrdenId(docRef.id);
            setTimeout(() => {
                clear()
                setMostrarBoton(true);
        }, 2000);
        })
        .catch(resultado =>{
            console.log("Tu compra no pudo ser completada con exito!");
        })
    }

    

	return (
        <div>
            <div>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                    <div>
                        <TextField type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} id="outlined-basic" label="Nombre" variant="outlined" />
                    </div>
                    <div>
                        <TextField type="email" onInput={(e) => {setEmail(e.target.value)}} id="outlined-basic" label="E-mail" variant="outlined" />
                    </div>
                    <div>
                        <TextField type="text" onInput={(e) => {setTelefono(e.target.value)}} id="outlined-basic" label="Telefono" variant="outlined" />
                    </div>      
                </Box>
                <Stack spacing={2} direction="row">
                    <Button type="submit" onClick={generarOrden} variant="outlined"><b>COMPLETAR COMPRA</b></Button>
                </Stack>
            </div>
            <div>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 0.6, minWidth: 120}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>imagen</TableCell>
                            <TableCell align="right">nombre</TableCell>
                            <TableCell align="right">cantidad</TableCell>
                            <TableCell align="right">precio</TableCell>
                            <TableCell align="right">precio x cant</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map( item => (
                        <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row"><img src={item.img} alt={item.name} width={100}/></TableCell>
                            <TableCell align="right">{item.name}</TableCell>
                            <TableCell align="right">{item.quantity}</TableCell>
                            <TableCell align="right">${item.price}</TableCell>
                            <TableCell align="right">${item.quantity * item.price}</TableCell>                            
                        </TableRow>                        
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell align="right" colSpan={3}><b>Total a pagar</b></TableCell>
                            <TableCell align="right">${cartTotal()}</TableCell>
                            
                            
                        </TableRow>
                       
                    </TableBody>
                </Table>
            </TableContainer>

                
            </div>
            
            <div>
                <div>
                    {ordenId ? <div role="alert">
                        <h2>Gracias por tu Compra!</h2>
                        <p>Tu Orden de Compra es la Nro: {ordenId}</p>
                    </div> : ""}
                    <div>
            {mostrarBoton && (
                <Link to={"/"}><Button variant='outlined'>VOLVER AL INICIO</Button></Link>)}
            </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout;