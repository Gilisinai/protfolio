import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import SimpleSlider from './components/ProjectSlider'
import Skills from './components/Skills'
import Footer from './components/Footer'

class App extends Component {

  state = {
    darkMode: false,
    color: '#21283E',
    
  }

  changeModes = () => {
    this.setState({
      darkMode : !this.state.darkMode
    }, this.chooseColors())
    
    
  }

  chooseColors = () => {
    if(!this.state.darkMode){
      document.documentElement.style.setProperty('--base', '#fff')
      document.documentElement.style.setProperty('--mode', '#21283E')
    } else {
      document.documentElement.style.setProperty('--base', '#000')
      document.documentElement.style.setProperty('--mode', '#fff')

    }
    
  }

  componentDidMount = () => {
    let date = new Date
    if(date.getHours() > 17) {
      this.setState({
        darkMode: true
      }, this.chooseColors() )
    }
  }

  render() {
    const { darkMode } = this.state;

    return (
      <div className={`body ${darkMode ? '' : ''}`}>
        <Header changeModes={this.changeModes} darkMode={darkMode} />
        <Intro darkMode={darkMode} />
        <SimpleSlider darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    );
  }
}

export default App;
