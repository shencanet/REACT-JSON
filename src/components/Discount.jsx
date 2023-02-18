import './Discount.css'
import React from 'react'
import data from '../products.json';

const Discount = (props) => {
  return (
    <div className='discount'>{props.discount} %</div>
  )
}

export default Discount