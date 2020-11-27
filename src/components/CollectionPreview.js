import React from 'react'
import './css/collectionPreview.scss'
import CollectionItem from './CollectionItem'

export default function CollectionPreview({title, items}) {
    return (
        <div className='collection-preview'>
            <h1 className='preview-title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, index) => index < 4).map(item => <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
}
