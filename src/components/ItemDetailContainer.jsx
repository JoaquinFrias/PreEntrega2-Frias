import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { data } from '../mocks/mockData'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{

        const coleccionProductos = collection(db, "products")
        const referenciaDoc = doc(coleccionProductos, id)

        getDoc(referenciaDoc)
        .then((result)=>{
            setProductDetail({
                id:result.id,
                ...result.data()
            })
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    },[])

    
    return (
    <div>
        {loading? <p>cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
    )
}

export default ItemDetailContainer