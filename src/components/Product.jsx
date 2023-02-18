import React from 'react'
import './Product.css'

export const Product = () => {
  return (
    
    <div className='product'>
    <img src='https://picsum.photos/200' alt='' />
    <h2 className='product__name'>Camisa</h2>
    <div className='product__details'>
        <p className='product__oldPrice'>200$</p>
        <p className='product__price'>300$</p>

    </div>
    </div>
    )
}
export  default Product
