import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../store/actions/noteActions'

class CreateNote extends Component {
    state = {
        title: '',
        description: ''
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createNote(this.state, this.props.currentUser)
    }


    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Create New Note</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='description'>Description</label>
                    <textarea id='description' className='materialize-textarea' onChange={this.handleChange}></textarea>
                    </div>
                    <div className='input-field'>
                        <button className='btn cyan lighten-1'>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('dash map state to props', state)
    return {
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNote: (note, currentUser) => dispatch(createNote(note, currentUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote)
