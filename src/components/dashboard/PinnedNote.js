import React from 'react'

const moment = require("moment");

const PinnedNote = ({notes}) => {
    const note = notes[0]

    if (note) {

    const createDate = moment(note.created_at)
    const updateDate = moment(note.updated_at)

    return(
        <div className='section'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title center'>Pinned Note</span>
                        <h5>{note.title}</h5>
                        <h6>{note.description}</h6>
                        <p className='grey-text'>Created: {createDate.format('MMM DD, YYYY - h:mma')} </p>
                        <p className='grey-text'>Updated: {updateDate.format('MMM DD, YYYY - h:mma')} </p>
                </div>
            </div>
        </div>
    )

} else {
    return(
        <div className='container center'>
            <p>No Pinned Notes</p>
        </div>
    )
}
}
export default PinnedNote