import  { useState, createContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (name, price) => {
        // adds new cart items to cartItems state array and keeps previous items in array
        setCartItems((prevState) => [...prevState, {name, price}])
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext