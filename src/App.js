import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "song": "Please select a song",
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard song={this.state.song}/>
        <div className="card-container">
          <Card title="Imagine" />
          <Card title="Let It Be" />
          <Card title="Maxwell Silver Hammer" />
        </div>
      </div>
    );
  }
}


export default App;
