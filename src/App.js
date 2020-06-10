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
    showColorPicker: false,

  }

  changeModes = () => {
    this.setState({
      darkMode: !this.state.darkMode
    }, this.chooseColors())


  }

  openPicker = () => {
      this.setState({
        showColorPicker: !this.state.showColorPicker
      })
    
  }

  closePicker = () => {
    this.setState({
      showColorPicker: false
    })
  }

  

  chooseColors = () => {
    if (!this.state.darkMode) {
      document.documentElement.style.setProperty('--base', '#fff')
      document.documentElement.style.setProperty('--mode', '#21283E')
      document.documentElement.style.setProperty('--primaryColor', '#DAA520')
    } else {
      document.documentElement.style.setProperty('--base', '#000')
      document.documentElement.style.setProperty('--mode', '#fff')
      document.documentElement.style.setProperty('--primaryColor', '#5A50FF')
    }

  }

  componentDidMount = () => {
    let date = new Date
    if (date.getHours() > 17 || date.getHours() < 6) {
      this.setState({
        darkMode: true
      }, this.chooseColors())
    }
  }

  render() {
    const { darkMode, showColorPicker } = this.state;

    return (
      <div className={`body ${darkMode ? '' : ''}`} >
        <Header changeModes={this.changeModes} openPicker={this.openPicker} closePicker={this.closePicker} darkMode={darkMode} showColorPicker={showColorPicker} />
        <Intro darkMode={darkMode}  closePicker={this.closePicker}/>
        <SimpleSlider darkMode={darkMode} closePicker={this.closePicker}/>
        {/* <Skills darkMode={darkMode} closePicker={this.closePicker}/> */}
        <Footer darkMode={darkMode} closePicker={this.closePicker}/>
      </div>
    );
  }
}

export default App;
