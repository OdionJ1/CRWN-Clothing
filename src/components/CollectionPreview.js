import React from 'react'
import './css/collectionPreview.scss'
import CollectionItem from './CollectionItem'

import { Link } from 'react-router-dom'

export default function CollectionPreview({title, items}) {
    return (
        <div className='collection-preview'>
            <Link to={`/shop/${title.toLowerCase()}`} style={{color: 'black', textDecoration: 'none'}}>
                <h1 className='preview-title'>{title.toUpperCase()}</h1>
            </Link>
            
            <div className='preview'>
                {items.filter((item, index) => index < 4).map(item => <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
}
