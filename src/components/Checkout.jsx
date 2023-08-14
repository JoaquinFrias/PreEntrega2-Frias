import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { db } from '../firebase/firebase';


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
                <div>
                <form>
                    <div>
                        <label className="form-label"><b>Nombre</b></label>
                        <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                    </div>
                    <div>
                        <label><b>E-mail</b></label>
                        <input type="email" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label><b>Telefono</b></label>
                        <input type="text" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    </form>
                <button type="submit" onClick={generarOrden}><b>COMPLETAR COMPRA</b></button>
                </div>
                
                <div>
                <table>
                    <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.img} alt={item.name} width={100} /></td>
                            <td><b>{item.name}</b></td>
                            <td><b>({item.quantity})  ${item.price}</b></td>
                            <td><b>${item.quantity * item.price}</b></td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2}></td>
                        <td><b>Total a pagar</b></td>
                        <td><b>${cartTotal()}</b></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div>
                <div>
                    {ordenId ? <div role="alert">
                        <h2>Gracias por tu Compra!</h2>
                        <p>Tu Orden de Compra es la Nro: {ordenId}</p>
                    </div> : ""}
                    <div>
            {mostrarBoton && (
                <Link to={"/"}><b>VOLVER AL INICIO</b></Link>)}
            </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout;