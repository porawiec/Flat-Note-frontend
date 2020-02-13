import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import NoteDetails from './components/notes/NoteDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'


class App extends Component {
  state = {
    notes: [
      {id: 1, title: 'some note', description: 'some note'}
    ]
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/note/:id' component={NoteDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
