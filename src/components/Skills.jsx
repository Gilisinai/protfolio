import React, { Component } from 'react';
import skills from '../data/skills'

class Skills extends Component {
    state = {
        showText : false
    }


    render() {
        return (
            <div className="container flex-container wrap full-height skills" id="section3" onClick={this.props.closePicker}>

                {skills.map((skill, i) => (
                    <div key={i} className="social flex-container vertical skill mr-sm" onMouseOver={this.showText} onMouseOut={this.hideText}>
                        <img className="skill-icon" src={skill.icon} alt="" />
                         <div className="skill-text" style={{color:`${skill.color}`}}>{skill.name}</div>
                    </div>
                ))}
            </div>
        );
    }
}



export default Skills;