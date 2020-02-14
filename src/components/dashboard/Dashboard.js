import React, { Component } from 'react'
import Notifications from './Notifications'
import NoteList from '../notes/NoteList'
import { connect } from 'react-redux'

class Dashboard extends Component {

    render(){
        // console.log(this.props)
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
    console.log(state)
    return {
        notes: state.note.notes
    }
}

export default connect(mapStateToProps)(Dashboard)