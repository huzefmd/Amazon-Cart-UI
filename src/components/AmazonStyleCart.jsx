import React from 'react';
import { useCartItemStore } from '../store/cartItemState';
function AmazonStyleCart() {
  const cartItems = useCartItemStore((state) => state.cartItems);
  const remove = useCartItemStore((state) => state.removeItem);
  const update = useCartItemStore((state) => state.updateQuantity);
  const total = useCartItemStore((state) => state.gettotalPrice());
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <h3>{item.name}</h3>
          <h3>{item.quantity}</h3>
          <button onClick={() => { update(item.id, item.quantity + 1) }}>+</button>
          <button onClick={()=>{
            if (item.quantity > 0) {
              update(item.id ,item.quantity-1)
            }
          }}>-</button>
          <p>{item.price}</p>
          <button onClick={remove}>Remove</button>
        </div>
      ))}
      <div>
        Total is { total}
      </div>
    </div>
  );
}

export default AmazonStyleCart
