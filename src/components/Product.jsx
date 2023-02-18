import React from "react";
import "./Product.css";
import AddCardBtn from "./AddCardBtn";

export const Product = () => {
  return (
    <div className="product">
      <img
        className="product__img"
        src="https://picsum.photos/200"
        alt="photo"
      />
      <h2 className="product__name">Camisa</h2>
      <div className="product__details">
        <p className="product__oldPrice">200$</p>
        <p className="product__price">300$</p>
      </div>
      <AddCardBtn />
    </div>
  );
};
export default Product;
