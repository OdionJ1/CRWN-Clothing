import React from 'react'
import CollectionsOverview from './Collections-overview'
import CollectionPage from './CollectionPage'

import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { selectCollection } from '../redux/shop/shop.selectors'


const ShopPage = ({ match, collection }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            {collection?
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                :
                <Redirect to="/shop" />

            }
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(ShopPage)
