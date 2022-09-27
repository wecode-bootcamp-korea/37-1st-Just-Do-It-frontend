import React, { useEffect, useState } from 'react';
import CartIsNull from './Commponent/CartIsNull';
import CartIsNotNull from './Commponent/CartIsNotNull';
import './Cart.scss';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  //통신용
  // useEffect(() => {
  //   fetch('http://192.168.243.221:8000/carts/', {
  //     mehtod: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjY0MjQwNzI2LCJleHAiOjE2NjUwMTgzMjZ9.4q9S_mW3KnqXinRL0N_0uMQHdMyZSc-IJbj8ERkzo4c',
  //     },
  //   })
  //     .then(response => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //       throw new Error('에러발생');
  //     })
  //     .catch(error => console.log(error))
  //     .then(data =>
  //       // setCartItems(data.result));
  //       console.log(data.result)
  //     );
  // }, []);
  //Mock data
  useEffect(() => {
    fetch('data/cart.json')
      .then(res => res.json())
      .then(res => setCartItems(res.result));
  }, []);

  return (
    <div className="cart">
      <div className="cartHeader">
        <h2 className="cartTitle">장바구니</h2>
        <p className="cartItemsCount">
          <span>0</span>개 상품
        </p>
      </div>
      {cartItems[0]?.cartId ? (
        <CartIsNotNull cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <CartIsNull />
      )}
    </div>
  );
}

export default Cart;
