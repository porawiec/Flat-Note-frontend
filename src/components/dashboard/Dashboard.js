import React, { Component } from 'react'
import Notifications from './Notifications'
import NoteList from '../notes/NoteList'
import { connect } from 'react-redux'
import { getNotes } from '../../store/actions/noteActions'

class Dashboard extends Component {

    render(){
        console.log('dash props',this.props)
        const { notes } = this.props

        return(
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <NoteList notes={notes} />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('dash map state to props', state)
    return {
        notes: state.note.notes,
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNotes: (currentUser) => dispatch(getNotes(currentUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)