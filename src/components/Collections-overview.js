import React from 'react'
import './css/collections-overview.scss'
import CollectionPreview from './CollectionPreview'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../redux/shop/shop.selectors'

let CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...dataProps}) => <CollectionPreview key={id} {...dataProps} />)}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)


