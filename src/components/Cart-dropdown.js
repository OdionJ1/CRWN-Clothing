import React from 'react'
import './css/cart-dropdown.scss'
import CartItem from './Cart-item'
import CustomButton from './CustomButton'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../redux/cart/cart.selectors'

let CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton 
                onClick={() => {
                    dispatch(toggleCartHidden())
                    history.push('/checkout')}}>Go to Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))