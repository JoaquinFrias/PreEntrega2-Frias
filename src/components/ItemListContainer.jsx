import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {data} from '../mocks/mockData'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({saludo, greeting}) =>{
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)
    const{categoriaId} = useParams()

    
    useEffect(()=>{
      setLoading(true)
      data
      .then((res)=>{
        if(categoriaId){
          setProductList(res.filter((item)=> item.category === categoriaId))
        }else{
          setProductList(res)
        } 
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
    }, [categoriaId])



  return (
    <div>
        <h1>{greeting}</h1>
        <ItemList productList={productList}/>
    </div>
  )
}

export default ItemListContainer