import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const  [items, updateItems] = useState([]);
    const addItemHandler = (item) => {
        let repeatItem = items.find((newItem) => newItem.name === item.name);

        if (repeatItem === undefined) {
          updateItems([...items, { ...item, quantity: Number(item.quantity) }]);
        } else {
          repeatItem.quantity += Number(item.quantity);
          updateItems([...items]);
        }
    };

    const removeItemHandler = (item) => {
        const updatedItems = [...items];

        const foundItemIndex = updatedItems.findIndex(
          (newItem) => newItem.name === item.name
        );
    
        if (foundItemIndex !== -1) {
          if (updatedItems[foundItemIndex].quantity > 1) {
            updatedItems[foundItemIndex].quantity -= 1;
          } else {
            updatedItems.splice(foundItemIndex, 1);
          }
    
          updateItems(updatedItems);
        }
    };

    const cartContext = {
        items: items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
   return <CartContext.Provider  value={cartContext}> 
    {props.children}
   </CartContext.Provider>
};

export default CartProvider;

// to manage cart context data & provides context to all components who have access to it