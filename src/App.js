import React, { Component } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import NoteDetails from './components/notes/NoteDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateNote from './components/notes/CreateNote'


class App extends Component {

  render(){
    const { currentUser } = this.props
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => {
              return currentUser.id ? < Dashboard /> : <Redirect to='/signin' component={SignIn} />
            }} />
            <Route exact path='/note/:id' render={() => {
              return currentUser.id ? < NoteDetails /> : <Redirect to='/signin' component={SignIn} />
            }} />
            {/* <Route path='/note/:id' component={NoteDetails} /> */}
            <Route exact path='/create' render={() => {
              return currentUser.id ? < CreateNote /> : <Redirect to='/signin' component={SignIn} />
            }} />
            {/* <Route path='/create' component={CreateNote} /> */}
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(App);