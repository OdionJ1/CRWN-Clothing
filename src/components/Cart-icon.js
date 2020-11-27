import React from 'react'
import { ReactComponent as ShoppingIcon } from './assets/11.2 shopping-bag.svg.svg'
import './css/cart-icon.scss'

import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../redux/cart/cart.selectors'

let CartIcon = ({toggleCartHidden, itemcount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{itemcount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemcount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)