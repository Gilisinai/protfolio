import React, { Component } from 'react';
import skills from '../data/skills'

class Skills extends Component {
    state = {

    }


    render() {
        return (
            <div className="container flex-container wrap full-height skills" id="section3" onClick={this.props.closePicker}>

                {skills.map((skill, i) => (
                    <div className="flex-container third-width" key={i}>
                        <div className="social flex-container skill-type">
                            <img src={skill.icon} />
                            <div className="flex-container vertical skills-wrapper scale-up-center">
                            {skill.skills.map((skill, i) => (
                                <div key={i} className="sub-skill flex-container " >
                                    <img className="skill-icon" src={skill.icon}/>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}



export default Skills;