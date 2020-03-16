import React from 'react'

const NoteSummary = ({note}) => {
    return(
        <div className='card z-depth-0 note-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{note.title}</span>
                <p>Posted by {note.user.username}</p>
                <p className='grey-text'>February 50000, 2020 - 10:00pm </p> {/* dynamically render time of note */}
            </div>
        </div>
    )
}

export default NoteSummary