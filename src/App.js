import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'


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
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
