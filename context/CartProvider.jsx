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
        setTotalPrice((prevTotalPrive => prevTotalPrive + (quantity * product.price)))
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




    const ascProductQA = (item) => {
        setcartList((prevCartlist) => {
            const newCartList = prevCartlist.map(cartProduct => {
                if (cartProduct.product.id === item.product.id) {
                    return { ...item, quantity: (item.quantity + 1) }
                } else {
                    return cartProduct
                }
            })
            return newCartList
        })
        setTotalAllProducts(prev => prev + 1)
        setTotalPrice(prevTotalPrice => prevTotalPrice + item.product.price)

    }

    const descProductQA = (item) => {
        if (item.quantity !== 1) {
            setcartList((prevCartlist) => {
                return prevCartlist.map(cartProduct => {
                    if (cartProduct.product.id === item.product.id) {

                        return { ...item, quantity: (item.quantity - 1) }
                    } else {
                        return cartProduct
                    }
                })
            })

        } else {
            setcartList((prevCartList) => {
                return prevCartList.filter(cartItem => cartItem.product.id !== item.product.id)
            })
        }
        setTotalAllProducts(prev => prev - 1)
        setTotalPrice(prevTotalPrice => prevTotalPrice - item.product.price)

    }

    const removeItem = (item) => {
        setcartList((prevCartList) => {
            return prevCartList.filter(cartItem => cartItem.product.id !== item.product.id)
        })
        setTotalAllProducts(prevTotalPructs => prevTotalPructs - item.quantity)
        setTotalPrice(prevTotalPrice => prevTotalPrice - (item.quantity * item.product.price))

    }

    return (
        <CartContext.Provider
            value={{
                cartList,
                quantity,
                drawerIsOpen,
                totalAllProducts,
                totalPrice,
                // methods
                addProductToCart,
                incQuantity,
                descQuantity,
                setDrawerIsOpen,
                ascProductQA,
                descProductQA,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext