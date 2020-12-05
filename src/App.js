import React from 'react';
import './App.css';
import './bootstrap.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';
import ImagineAlbumcover from './Components/Images/ImagineAlbumcover.jpeg';
import LetItBeAlbumcover from './Components/Images/LetItBe album cover.jpeg';

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
          <Card title="Imagine" shortLyrics="Lyrics: Imagine there's no heaven It's easy if you try No hell below us Above us, only sky" songImage={ImagineAlbumcover}/>
          <Card title="Let It Be" songImage={LetItBeAlbumcover}/>
          <Card title="Maxwell Silver Hammer" />
        </div>
      </div>
    );
  }
}


export default App;
