import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header'
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage'
import FormPage from './components/FormPage'
import CheckoutPage from './components/CheckoutPage'
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser, selectUserCartItems } from './redux/user/user.selector'
import { setCurrentUser, updateUserCartItems } from './redux/user/user.actions'
import { findUserCartItems, clearAllItemsFromCart } from './redux/cart/cart.actions'
import { useSelector } from 'react-redux'


let App = ({ setCurrentUser, currentUser, findUserCartItems, userCartItems, updateUserCartItems, clearAllItemsFromCart }) => {
  let unsubscribeFromAuth = null;
  const cartItems = useSelector(({ cart: {cartItems} }) => cartItems)
  
  useEffect(() => {
    //ComponentDidMount
    unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,  
            ...snapShot.data()
          })
        }) //Note:
        //Usually you can't console log state in the same function after just setting it,
        //Using class component though you can, by passing a second function as a second parameter. Like this:
          // this.state({}, () => console.log(this.state))
      } else {
        setCurrentUser(userAuth)
      }
    })
    //ComponentWillUnmount
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  useEffect(() => {
    if(currentUser){
      updateUserCartItems(cartItems)
    }

  }, [cartItems])

  useEffect(() => {
    if(currentUser){
      findUserCartItems(userCartItems, currentUser)
    }
  },[currentUser])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => currentUser? (<Redirect to='/' />) : (<FormPage />)} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  userCartItems: selectUserCartItems
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  findUserCartItems: (userCartItems, currentUser) => dispatch(findUserCartItems(userCartItems, currentUser)),
  updateUserCartItems: cartItems => dispatch(updateUserCartItems(cartItems)),
  clearAllItemsFromCart: () => dispatch(clearAllItemsFromCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
  