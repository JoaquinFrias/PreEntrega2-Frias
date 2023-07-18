import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { data } from '../mocks/mockData'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{
        data
        .then((res)=> setProductDetail(res.find((item)=> item.id === id)))
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))

    },[id])
    

    return (
    <div>
        {loading? <p>cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
    )
}

export default ItemDetailContainer