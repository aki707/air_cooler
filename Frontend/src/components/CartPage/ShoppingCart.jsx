import React, { useState } from 'react';
import './ShoppingCart.css';
import { Button } from "@/components/ui/button"
const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Wooden Chair', size: 'M', color: 'White, Gold', price: 98.00, quantity: 4 },
    { id: 2, name: 'Lighting Vases', size: 'M', color: 'White, Gold', price: 98.00, quantity: 1 },
    { id: 3, name: 'Teapot Ultimate', size: 'M', color: 'White, Gold', price: 98.00, quantity: 2 },
    { id: 4, name: 'Vase Flower', size: 'M', color: 'White, Gold', price: 98.00, quantity: 0 }
  ]);

  const handleQuantityChange = (id, change) => {
    setCart(cart.map(item => 
      item.id === id 
      ? { ...item, quantity: item.quantity + change >= 0 ? item.quantity + change : 0 } 
      : item
    ));
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="shopping-cart">
      <nav>
        <a href="/">Home</a> / <span>Shopping Cart</span>
      </nav>
      <h1>Your Bag <span>{cart.length} item</span></h1>
      <div className="cart-container">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="product">
              <img src={`/${item.name.toLowerCase().replace(' ', '-')}.png`} alt={item.name} />
              <div className="product-details">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
              </div>
            </div>
            <div className="price">${item.price.toFixed(2)}</div>
            <div className="quantity">
              <Button variant = "outline" className="text-slate-900" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
              <span>{item.quantity}</span>
              <Button variant = "outline" className="text-slate-900" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
            </div>
            <div className="total">${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="total-amount">
        <h3>Total: ${getTotal()}</h3>
      </div>
      <button onClick={() => alert('Continue Shopping')}>Continue Shopping</button>
    </div>
  );
};

export default ShoppingCart;
