import React, { useState, useEffect, useRef } from 'react';
import CartItem from './CartItem';
import CartAside from './CartAside';
import OptModal from './OptModal';

function CartIsNotNull({ cartItems, setCartItems }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const optModalOut = useRef();
  const closeOptModal = e => {
    if (optModalOut.current && optModalOut.current.contains(e.target))
      setIsOpenModal(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeOptModal);
    return () => {
      document.removeEventListener('mousedown', closeOptModal);
    };
  });
  return (
    <article className="cartWrapper">
      <section className="cartItemsListWrapper">
        <div className="cartItemsListHeader">
          <button className="cartDelItems">전체삭제</button>
        </div>
        <ul className="cartItemsList">
          {cartItems &&
            cartItems.map(cartItems => (
              <CartItem
                setIsOpenModal={setIsOpenModal}
                key={cartItems.cartId}
                cartItems={cartItems}
              />
            ))}
        </ul>
        {isOpenModal && (
          <>
            <div ref={optModalOut} className="optOverlay" />
            <OptModal
              cartItems={cartItems}
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              setCartItems={setCartItems}
            />
          </>
        )}
      </section>
      <CartAside cartItems={cartItems} />
    </article>
  );
}

export default CartIsNotNull;
