import React, { createContext } from 'react'

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartList, setcartList] = useState([])
    return (
        <CartContext.Provider
            value={{
                cartList
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext