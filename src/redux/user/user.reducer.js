const INITIAL_STATE = {
    currentUser: null,
    userCartItems: {}
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'UPDATE_USER_CART_ITEMS':
            return {
                ...state,
                userCartItems: {...state.userCartItems, [state.currentUser.id]: action.payload }
            }

        default:
            return state;
    }
}

export default userReducer