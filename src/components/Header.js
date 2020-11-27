import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './assets/4.3 crown.svg.svg'
import CartIcon from './Cart-icon'
import CartDropdown from './Cart-dropdown'
import './css/header.scss'

import { auth } from '../firebase/firebaseUtils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../redux/user/user.selector';
import { selectCartHidden } from '../redux/cart/cart.selectors'

let Header = ({ currentUser, hidden }) => {
    return (
        <header className="header">
            {/* <h4>{currentUser.displayName}</h4> */}
            <Link to = "/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className='options'>
                <Link className="option" to ="/shop">
                    Shop
                </Link>
                <Link className="option" to ="/shop">
                    Contact
                </Link>
                {currentUser? 
                <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                 : 
                <Link className="option" to ="/signin">
                    Sign in
                </Link>}
                <CartIcon />
            </div>
            {hidden? '': <CartDropdown />}
            
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
