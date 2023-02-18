import React from "react";
import "./Product.css";
import AddCardBtn from "./AddCardBtn";

export const Product = (props) => {
  return (
    <div className="product">
      <img
        className="product__img"
        src="https://picsum.photos/200"
        alt="photo"
      />
      <h2 className="product__name">{props.name}</h2>
      <div className="product__details">
        <p className="product__oldPrice">{props.oldPrice}</p>
        <p className="product__price">{props.Price}</p>
      </div>
      <AddCardBtn />
    </div>
  );
};
export default Product;
