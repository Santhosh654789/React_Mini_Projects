import React from "react";

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ₹{item.price}</p>

      <button onClick={() => updateQuantity(item.id, item.qty - 1)}>-</button>

      <span>{item.qty}</span>

      <button onClick={() => updateQuantity(item.id, item.qty + 1)}>+</button>

      <br /><br />

      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
