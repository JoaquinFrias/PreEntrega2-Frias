import React from 'react'
import Item from './Item'

const ItemList = ({productList}) => {
    return (
        <div className="cardContainer">
            {productList.map((product)=> <Item key={product.id} product={product}/>)}
        </div>
    )
}

export default ItemList