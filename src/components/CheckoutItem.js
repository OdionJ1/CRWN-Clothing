import React from 'react'
import './css/checkoutItem.scss'
import { connect } from 'react-redux'
import { clearItemFromCart } from '../redux/cart/cart.actions'
import { addItem, removeItem } from '../redux/cart/cart.actions'

let CheckoutItem = ({ addItem, cartItem, removeItem, reduceItem }) => {
    let { imageUrl, price, name, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => reduceItem(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div onClick={() => removeItem(cartItem)} className='remove-button'>&#10005;</div>
        </div>
    )
}                               

const mapDispatchToProps = dispatch => ({
    removeItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    reduceItem: cartItem => dispatch(removeItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
