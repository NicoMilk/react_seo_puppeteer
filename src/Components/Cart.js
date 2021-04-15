import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  function addItemToCart(e) {
    const item = e.target.value;
    console.log(item);
    setCart(cart => [...cart, item]);
  }

  function emptyCart() {
    setCart(cart => []);
  }

  return (
    <div className="app">
      <div className="items container">
        <button value="MacBook Pro" onClick={addItemToCart}>💻 MacBook Pro</button>
        <button value="iPhone XS" onClick={addItemToCart}>📱iPhone XS</button>
        <button value="Gem" onClick={addItemToCart}>💎 Gem</button>
        <button value="Teddy Bear" onClick={addItemToCart}>🧸 Teddy Bear</button>
        <button onClick={emptyCart}>❌ Vider le caddie</button>
      </div>
      <div className="cart" style={{marginTop:20}}>
        🛒Caddie :
        <ul>
          {cart.map(item => <li key={item} style={{marginTop:10, listStyle:'none'}}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Cart;