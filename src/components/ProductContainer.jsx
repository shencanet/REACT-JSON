import React from 'react'

const ProductContainer = (props) => {
  return (

    <section className='products__section'>
      {props.children}
        <h1 className='products__title'>Nuestros Productos:</h1>
        <div className='products__container'>
            
º.
        </div>

    </section>
  )
}

export default ProductContainer