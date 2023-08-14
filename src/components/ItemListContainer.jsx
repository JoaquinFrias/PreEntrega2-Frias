import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {data} from '../mocks/mockData'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const ItemListContainer = ({saludo, greeting}) =>{
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)
    const{categoriaId} = useParams()

    //firebase
    useEffect(()=>{
      setLoading(true)
      const productos = categoriaId ? query(collection(db, "products"), where("category", "==", categoriaId)) : collection(db, "products")
      getDocs(productos)
      .then((result)=>{
        const lista = result.docs.map((product)=>{
          return{
            id:product.id,
            ...product.data()
          }
        })
        setProductList(lista)
      })
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
    },[categoriaId])
    
    
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemList productList={productList}/>
    </div>
  )
}

export default ItemListContainer