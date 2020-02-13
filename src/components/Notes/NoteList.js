import React from 'react'
import NoteSummary from './NoteSummary'

const NoteList = ({notes}) => {
    return(
        <div className='note-list section'>
            { notes && notes.map(note => {
                return(
                    <NoteSummary note={note} key={note.id} />
                )
            }) }
        </div>
    )
}

export default NoteList