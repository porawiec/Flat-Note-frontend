import React from 'react'

const NoteSummary = () => {
    return(
        <div className='card z-depth-0 note-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>Note Title</span> {/* dynamically render title of note */} 
                <p>Posted by username</p> {/* dynamically render author of note */}
                <p className='grey-text'>February 12, 2020 - 10:00pm </p> {/* dynamically render time of note */}
            </div>
        </div>
    )
}

export default NoteSummary