import React from 'react';
import './App.css';
import './bootstrap.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';
import ImagineAlbumcover from './Components/Images/ImagineAlbumcover.jpeg';
import LetItBeAlbumcover from './Components/Images/LetItBe album cover.jpeg';
import MaxwellSilverHammerAlbumcover from './Components/Images/AbbeyRoad album cover.jpg';

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
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Card title="Imagine" shortLyrics="Lyrics: Imagine there's no heaven It's easy if you try No hell below us Above us, only sky" songImage={ImagineAlbumcover}/>
                </div>
                <div className="col-sm">
                    <Card title="Let It Be" shortLyrics="When I find myself in times of trouble, Mother Mary comes to me
Speaking words of wisdom, let it be" songImage={LetItBeAlbumcover}/>
                </div>
                <div className="col-sm">
                    <Card title="Maxwell Silver Hammer" shortLyrics="Joan was quizzical, studied pataphysical
Science in the home
Late nights all alone with a test tube
Oh, oh, oh, oh" songImage={MaxwellSilverHammerAlbumcover}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default App;
