import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartList, setcartList] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalAllProducts, setTotalAllProducts] = useState(0)
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const incQuantity = () => {
        setQuantity(quantity + 1)
    }
    const descQuantity = () => {
        if (quantity <= 1)
            setQuantity(1)
        else
            setQuantity(quantity - 1)
    }



    const addProductToCart = (product) => {
        const vaor = cartList.find(prod => prod.product.id === product.id)
        setTotalAllProducts((prevTotal => prevTotal + quantity))
        if (vaor === undefined) {
            setcartList([...cartList, { product, quantity }])
            setDrawerIsOpen(true)
        } else {
            setcartList(prevCart => {
                return prevCart.map(item => {
                    if (item.product.id === product.id)
                        return { ...item, quantity: item.quantity + quantity }
                    else
                        return item
                })
            })
        }
    }






    return (
        <CartContext.Provider
            value={{
                cartList,
                quantity,
                drawerIsOpen,
                totalAllProducts,
                // methods
                addProductToCart,
                incQuantity,
                descQuantity,
                setDrawerIsOpen
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext