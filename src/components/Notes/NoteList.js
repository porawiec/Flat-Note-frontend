import React from 'react'
import NoteSummary from './NoteSummary'

const NoteList = () => {
    return(
        <div className='note-list section'>
            <NoteSummary />
            <NoteSummary />
            <NoteSummary />
        </div>
    )
}

export default NoteList