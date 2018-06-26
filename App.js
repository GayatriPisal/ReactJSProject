import React, { Component } from 'react';

import Header from './Components/HeaderComponent/header';
import Footer from './Components/footerComponent/footer';
import Main from './Components/MainComponent/main';
import Navbar from './Components/MainComponent/navbar';

import './Assets/css/cssFile.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <Navbar/>
          <Footer/>
      </div>
    );
  }
}

export default App;







































































