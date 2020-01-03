import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';


const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 100
      }
    }
  }
}

function App() {
  return (
    <div className="App">
    <Particles className='particles'
      params={particleOptions}
     />
      <Navigation/>
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
