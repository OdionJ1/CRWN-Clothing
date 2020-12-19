export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})


export const updateUserCartItems = cartItems => ({
    type: 'UPDATE_USER_CART_ITEMS',
    payload: cartItems
})