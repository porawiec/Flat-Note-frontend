import React from 'react'

const moment = require("moment");

const NoteSummary = ({note}) => {
    const createDate = moment(note.created_at)
    const updateDate = moment(note.updated_at)

    return(
        <div className='card z-depth-0 note-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{note.title}</span>
                <p className='grey-text'>Created: {createDate.format('MMM DD, YYYY - h:mma')} </p>
                <p className='grey-text'>Updated: {updateDate.format('MMM DD, YYYY - h:mma')} </p>
            </div>
        </div>
    )
}

export default NoteSummary