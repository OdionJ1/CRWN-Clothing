import SHOP_DATA from '../../components/data/2.2 shop.data.js.js'

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default shopReducer