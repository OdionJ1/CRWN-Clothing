export const toggleCartHidden = () => ({
    type: 'TOGGLE_CART_DROPDOWN'
})

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item
})

export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: 'CLEAR_ITEM_FROM_CART',
    payload: item
})


 export const clearAllItemsFromCart = () => ({
    type: 'CLEAR_ALL_ITEMS_FROM_CART'
})



const findUserCartItemsAction = (cartItems) => ({
    type: 'FETCH_CART_ITEMS',
    payload: cartItems
})

export const findUserCartItems = (userCartItems, user) => {
    let cartItems = userCartItems[user.id]

    if(cartItems) {
        return findUserCartItemsAction(cartItems)
        
    } else {
        userCartItems[user.id] = []
        let cartItems = userCartItems[user.id]

        return findUserCartItemsAction(cartItems)
    }
}