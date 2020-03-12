import React from 'react'
import { connect } from 'react-redux'

const NoteDetails = (props) => {
    const id = props.match.params.id
    //find note by id
    // render title
    // render description
    console.log('al;sdfjk', props.note)    

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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    // const notes = this.props.notes??????
    // const note = notes ? notes[id] : null
        return {
            note: state.note.notes.find((note) => {return (
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