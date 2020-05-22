import React, { Component } from 'react';
import gili from '../assets/images/gili.png'
import whatsApp from '../assets/images/whatsapp-line.svg'

class Intro extends Component {
    render() {
        const {darkMode} = this.props
        return (
            <div className={`container full-height flex-container`} id="section1">
                <div className="flex-container half-width vertical centered">

                <img src={gili} className="profile-pic"/>
                <div className={`primary-heading base-color center-text `}>Gili Sinai</div>
                <div className="secondary-heading primary-color center-text">Full Stack Web Developer</div>
                <div className={`text-normal base-color center-text `}>Hi! I’m Gili, formerly an interactive developer at Pyro TLV, and currently looking for a new challenge!</div>
                <div className={`text-normal base-color center-text mb-sm `}>View my work, and contact me if you would like to hire me!</div>
                <div className="flex-container btn-wrapper">
                    <div className={`btn flex-container space-evenly mr-sm `}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="primary-color-icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z"/></svg>
                        <div className={`btn-text base-color`}>Send a message</div>
                    </div>
                    <div className={`btn flex-container space-evenly mr-sm`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="primary-color-icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/></svg>
                        <div className={`btn-text base-color`}>Send an email</div>
                    </div>
                    <div className={`btn flex-container space-evenly mr-sm`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="primary-color-icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"/></svg>
                        <div className={`btn-text base-color`}>Download my CV</div>
                    </div>
                </div>

                </div>
                
            </div>
        );
    }
}



export default Intro;