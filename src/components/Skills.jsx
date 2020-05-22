import React, { Component } from 'react';
import skills from '../data/skills'

class Skills extends Component {
    render() {
        return (
            <div className="container flex-container wrap full-height skills" id="section3">

                {skills.map((skill, i) => (
                    <div key={i} className="social flex-container vertical skill mr-sm">
                        <img className="skill-icon" src={skill.icon} alt="" />
                        <div className="skill-text" style={{color:`${skill.color}`}}>{skill.name}</div>
                    </div>
                ))}
            </div>
        );
    }
}



export default Skills;