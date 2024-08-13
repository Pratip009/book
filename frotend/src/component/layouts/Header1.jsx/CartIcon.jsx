import React from "react";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import "./CartIcon.css"
const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const cartItemCount = cartItems.length;

  return (
    <div className="cartIconWrapper">
      <span className="cartIcon">
        <IoCartOutline style={{fontSize:"1.8rem"}}/>
        {cartItemCount > 0 && (
          <span className="cartItemCount">{cartItemCount}</span>
        )}
      </span>
    </div>
  );
};

export default CartIcon;
