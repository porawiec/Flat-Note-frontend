import React from 'react'

const NoteDetails = (props) => {
    const id = props.match.params.id

    return (
        <div className='container section note-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>
                        Note Title - {id}
                        {/* dynamic Note Title would exist here */}
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sunt ut assumenda ullam, sint architecto, hic quos necessitatibus tempore repellat omnis accusamus adipisci rerum voluptatum ducimus voluptate nostrum magni error.
                    </p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div> Posted by Username {/* dynamic Author/Username would exist here */} </div>
                    <div> February 12, 2020 - 10:00pm {/* dynamically render time of note */} </div>
            </div>
        </div>
    </div>
    )
}

export default NoteDetails