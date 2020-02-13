import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'


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
          <h1>Note Taker</h1>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
