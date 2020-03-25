import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentNote } from '../../store/actions/noteActions'
import { editNote } from '../../store/actions/noteActions'

class EditNote extends Component {
    constructor (props) {
        super(props)
        console.log('constructor', props)

        if (props.currentNote) {
        this.state = {
            title: props.currentNote.title,
            description: props.currentNote.description
        }
    } else {
        this.state = {
            title: '',
            description: ''
        }
    }
    }
    
    componentDidMount = () => {
        const noteId = parseInt(this.props.routing.match.params.id)
        this.props.getCurrentNote(noteId)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (!prevProps.currentNote && prevState.title === '') {
            this.setState({
                title: this.props.currentNote.title,
                description: this.props.currentNote.description
            })
        }
    }
    
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        const noteId = parseInt(this.props.routing.match.params.id)

        e.preventDefault()
        // console.log(this.state)
        // console.log(this.props)
        this.props.editNote(noteId, this.state)
        this.props.routing.history.push('/')
        
    }
    
    
    render() {
        // const editId = parseInt(this.props.routing.match.params.id)
        // const note = this.props.notes.find(note => note.id === editId)
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Edit Your Note</h5>
                    <div className='input-field'>
                        <span>Title</span>
                        <input value={this.state.title} name="whatever" type='text' id='title' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                    <span>Description</span>
                        <textarea value={this.state.description} id='description' className='materialize-textarea' onChange={this.handleChange}></textarea>
                    </div>
                    <div className='input-field'>
                        <button className='btn cyan lighten-1'>Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('dash map state to props', state)
    return {
        notes: state.note.notes,
        currentNote: state.note.currentNote
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editNote: (noteId, note) => dispatch(editNote(noteId, note)),
        getCurrentNote: (noteId) => dispatch(getCurrentNote(noteId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote)
