import React from 'react'
import CustomButton from './CustomButton'
import './css/collectionItem.scss'

import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions'

let CollectionItem = ({item, addItem}) => {
    let {name, price, imageUrl} = item;

    return (
        <div className="collection-Item">
            <div style={{backgroundImage: `url(${imageUrl})`}} className= "image" />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)