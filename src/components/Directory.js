import React, { Component } from 'react'
import MenuItem from './MenuItem'
import sections from './data/10.1 directory.data.js'
import './css/directory.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections  } from '../redux/directory/directory.selectors'

const Directory = ({sections}) => {
    return (
        <div className="directory-menu">
            {sections.map(({id, ...sectionProp}) => <MenuItem {...sectionProp} key={id} />)}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
