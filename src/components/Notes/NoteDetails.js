import React from 'react'
import { connect } from 'react-redux'

const moment = require("moment");

const NoteDetails = (props) => {
    // console.log('note detail props', props)
    // const id = props.routing.match.params.id
    const { note } = props

    const createDate = moment(note.created_at)
    const updateDate = moment(note.updated_at)

    if (note) {
        return(
            <div className='container section note-details'>
            {console.log('return details props', props)}
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>
                            {note.title}
                            {/* {id} */}
                        </span>
                        <p>
                            {note.description}
                        </p>
                    </div>
                    <div className='card-action grey lighten-4 grey-text'>
                        <div> Created: {createDate.format('MMM DD, YYYY - h:mma')} </div>
                        <div> Updated: {updateDate.format('MMM DD, YYYY - h:mma')} </div>
                    </div>
                </div>
            </div>
        )
    } else {
    return (
        <div className='container center'>
            <p>Loading Note...</p>
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.routing.match.params.id)
    // console.log('map state', state)
    const notes = state.note.notes
    // console.log('maps state notes', notes)
        return {
            note: notes.find((note) => {
                console.log(note.id)
                return (
            note.id === id)}
            )
        }
}

export default connect(mapStateToProps)(NoteDetails)

/////////////////////////////////////////////////////////////////

// import React from 'react'
// import { connect } from 'react-redux'

// const NoteDetails = (props) => {
//     const { note } = props
//     console.log(props)
//     if(note){
//         return(
//             <div className='container section note-details'>
//                 <div className='card z-depth-0'>
//                     <div className='card-content'>
//                         <span className='card-title'>
//                             Note Title -
//                             {/* dynamic Note Title would exist here {note.title}*/}
//                         </span>
//                         <p>
//                             {/* dynamic Note Description would exist here {note.description}*/}
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sunt ut assumenda ullam, sint architecto, hic quos necessitatibus tempore repellat omnis accusamus adipisci rerum voluptatum ducimus voluptate nostrum magni error.
//                         </p>
//                     </div>
//                     <div className='card-action grey lighten-4 grey-text'>
//                         <div> Posted by Username {/* dynamic Author/Username would exist here {note.user.username} */} </div>
//                         <div> February 12, 2020 - 10:00pm {/* dynamically render time of note {note.updated_by} */} </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     } else {
//         return (
//             <div className="container center">
//                 <p>Loading Note...</p>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     const id = ownProps.match.params.id
//     const notes = this.props.notes??????
//     const note = notes ? notes[id] : null
//         return {
//             note: note
//         }
// }

// export default connect(mapStateToProps)(NoteDetails)
// // need to get notes to be synced with state