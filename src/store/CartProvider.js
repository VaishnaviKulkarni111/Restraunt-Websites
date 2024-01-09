import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addItemHandler = (item) => {};

    const removeItemHandler = (item) => {};

    const cartContext = {
        items:[],
        totalAmount :0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
   return <CartContext.Provider  value={cartContext}> 
    {props.children}
   </CartContext.Provider>
};

export default CartProvider;

// to manage cart context data & provides context to all components who have access to it