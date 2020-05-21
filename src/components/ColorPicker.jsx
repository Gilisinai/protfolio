import React, { Component } from 'react';
import {ChromePicker} from 'react-color'

class ColorPicker extends Component {
    state = {
        background: '#fff',
      };
    
      handleChangeComplete = (color, event) => {
        this.setState({ background: color.hex });
      };

      
    
      render() {
        return <ChromePicker color={this.state.color} onChangeComplete={ this.handleChangeComplete } />;
      }
}



export default ColorPicker;