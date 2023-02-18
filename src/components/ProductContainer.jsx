import React from 'react'
import './ProductContainer.css'

const ProductContainer = (props) => {
  return (

    <section className='products__section'>
      
        <h1 className='products__title'>Nuestros Productos:</h1>
        <div className='products__container'>
        {props.children}
            

        </div>

    </section>
  )
}

export default ProductContainer