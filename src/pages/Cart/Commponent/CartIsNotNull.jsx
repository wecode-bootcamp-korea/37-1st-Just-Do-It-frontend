import React from 'react';
import CartItem from './CartItem';
import CartAside from './CartAside';

function CartIsNotNull({ cartItems }) {
  return (
    <article className="cartWrapper">
      <section className="cartItemsListWrapper">
        <div className="cartItemsListHeader">
          <button className="cartDelItems">전체삭제</button>
        </div>
        <ul className="cartItemsList">
          {cartItems &&
            cartItems.map(cartItems => (
              <CartItem key={cartItems.cartId} cartItems={cartItems} />
            ))}
        </ul>
      </section>
      <CartAside cartItems={cartItems} />
    </article>
  );
}

export default CartIsNotNull;
