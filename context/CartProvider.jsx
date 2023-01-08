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
            localStorage.setItem('items', JSON.stringify([...cartList, { product, quantity }]))
            setDrawerIsOpen(true)
        } else {
            setcartList(prevCart => {
                return prevCart.map(item => {
                    if (item.product.id === product.id) {
                        localStorage.setItem('items', JSON.stringify({ ...item, quantity: item.quantity + quantity }))
                        return { ...item, quantity: item.quantity + quantity }
                    }
                    else {
                        localStorage.setItem('items', JSON.stringify(item))
                        return item
                    }
                })
            })
        }
    }




    const ascProductQA = (item) => {
        setcartList((prevCartlist) => {
            const newCartList = prevCartlist.map(cartProduct => {
                if (cartProduct.product.id === item.product.id) {
                    // localStorage.setItem('items', JSON.stringify({ ...item, quantity: (item.quantity + 1) }))
                    return { ...item, quantity: (item.quantity + 1) }
                } else {
                    // localStorage.setItem('items', JSON.stringify(cartProduct))
                    return cartProduct
                }
            })
            localStorage.setItem('items', JSON.stringify(newCartList))
            return newCartList
        })
        setTotalAllProducts(prev => prev + 1)
        setTotalPrice(prevTotalPrice => prevTotalPrice + item.product.price)

    }

    const descProductQA = (item) => {
        if (item.quantity !== 1) {
            setcartList((prevCartlist) => {
                const newCartList = prevCartlist.map(cartProduct => {
                    if (cartProduct.product.id === item.product.id) {
                        return { ...item, quantity: (item.quantity - 1) }
                    } else {
                        return cartProduct
                    }
                })
                localStorage.setItem('items', JSON.stringify(newCartList))
                return newCartList
            })

        } else {

            setcartList((prevCartList) => {
                const items = prevCartList.filter(cartItem => cartItem.product.id !== item.product.id)
                localStorage.setItem('items', JSON.stringify(items))
                return items
            })
        }
        setTotalAllProducts(prev => prev - 1)
        setTotalPrice(prevTotalPrice => prevTotalPrice - item.product.price)

    }

    const removeItem = (item) => {
        setcartList((prevCartList) => {
            const filteredItems = prevCartList.filter(cartItem => cartItem.product.id !== item.product.id)
            localStorage.setItem('items', JSON.stringify(filteredItems))
            return filteredItems
        })
        setTotalAllProducts(prevTotalPructs => prevTotalPructs - item.quantity)
        setTotalPrice(prevTotalPrice => prevTotalPrice - (item.quantity * item.product.price))

    }

    const CheckingValuesInLocalStorage = () => {
        const getDataFromStorage = JSON.parse(localStorage.getItem('items'))
        let sumQuty = 0
        let subTotalPrice = 0
        if (getDataFromStorage) {
            console.log('si data')
            setcartList(getDataFromStorage)

            for (const itemStorage of getDataFromStorage) {
                sumQuty += itemStorage.quantity
                subTotalPrice += (itemStorage.quantity * itemStorage.product.price)
            }
            setTotalAllProducts(sumQuty)
            setTotalPrice(subTotalPrice)
        }
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
                removeItem,
                setQuantity,
                CheckingValuesInLocalStorage
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext