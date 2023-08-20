'use client';

import React, { useEffect, useState } from 'react';
import './styles.css';
import NavigationBar from './navigationBar';
import CartItems from './cartItems';

export interface IItem {
  id: number;
  value: number;
}

const App: React.FC = () => {
  const [totalItemsAmount, setTotalItemsAmount] = useState(0);
  const [state, setState] = useState({
    cartItems: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  });

  // UseEffect er en React hook som blir kjørt hver gang en dependency blir endret
  // Rekalkuler hver gang cartItems blir endret og sett den nye verdien
  useEffect(() => {
    if (state.cartItems) {
      let totalItemsAmount = 0;
      state.cartItems.map((item: IItem) => (totalItemsAmount += item.value));
      setTotalItemsAmount(totalItemsAmount);
    }
  }, [state.cartItems]);

  const handleDecrement = (item: IItem) => {
    // Kopier state object array fordi det er immutable
    const cartItemCopy = [...state.cartItems];
    const itemIndex = cartItemCopy.indexOf(item);
    cartItemCopy[itemIndex].value--;

    setState({ cartItems: cartItemCopy });
  };
  const handleIncrement = (item: IItem) => {
    const cartItemCopy = [...state.cartItems];
    const itemIndex = cartItemCopy.indexOf(item);

    cartItemCopy[itemIndex].value++;

    setState({ cartItems: cartItemCopy });
  };

  const handleDelete = (itemId: number) => {
    // Filtrerer ut her pga enklest i denne casen
    const itemsFiltered = state.cartItems.filter((item: IItem) => {
      return item.id !== itemId;
    });
    setState({ cartItems: itemsFiltered });
  };

  const handleReset = () => {
    const itemsReset = state.cartItems.map((item: IItem) => {
      item.value = 0;
      return item;
    });

    setState({ cartItems: itemsReset });
  };

  return (
    <div className="h-screen w-screen flex justify-center px-0 py-[50px]">
      <main className="container">
        <div className="bg-[#86e4f3] px-2.5 py-[50px] rounded-xl border-[10px] border-solid border-[#49848d] w-50">
          <NavigationBar
            totalUniqueItems={
              state.cartItems.filter((item: IItem) => item.value > 0).length
            }
            totalItems={totalItemsAmount}
          />
          <CartItems
            cartItems={state.cartItems}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
