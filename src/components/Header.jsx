import React, { Component, Fragment } from 'react';
import { Link} from "react-scroll";
import { ChromePicker, HuePicker } from 'react-color'
import sun from '../assets/images/star.svg'
import star1 from '../assets/images/Ellipse-5.svg'
import star2 from '../assets/images/Ellipse-6.svg'
import moon from '../assets/images/moon.svg'
import starNight from '../assets/images/star-night.svg'
import starNight2 from '../assets/images/star-night-2.svg'



class Header extends Component {

    state = {
        color: '#5a50ff',
        showColorPicker: false,
        slide: 0,
        slideInvert:0,
        lastScrollY: 0
    }

    changeModes = () => {
        this.props.changeModes()
    }

    

    handleChangeComplete = (color, event) => {
        this.setState({ color: color.hex }, this.chooseColor());
    };

    chooseColor = () => {
        document.documentElement.style.setProperty('--primaryColor', this.state.color)
    }

    openPicker = () => {
        this.props.openPicker()
    }

    componentWillMount() {
        // When this component mounts, begin listening for scroll changes
        window.addEventListener('scroll', this.handleScroll);
        
    }

    componentWillUnmount() {
        // If this component is unmounted, stop listening
        window.removeEventListener('scroll', this.handleScroll);
        
    }

    handleScroll = () => {
        const { lastScrollY } = this.state;
        const currentScrollY = window.scrollY;
        

        if (currentScrollY > lastScrollY) {
            this.setState({ slide: '-50px' , slideInvert: '50px' });
        } else {
            this.setState({ slide: '0px', slideInvert:'0px' });
        }
        this.setState({ lastScrollY: currentScrollY });
    };


    render() {
        const { darkMode,showColorPicker } = this.props
        return (
            <Fragment>
                <div className="header flex-container vertical flex-start desktop-only">
                    <div className="header-item-wrapper">
                        <div className={`mode-toggler ${darkMode ? 'night' : 'day'}`} onClick={this.changeModes}>
                            <img className={`sun ${darkMode ? 'scale-out-right' : ''} scale-up-right`} src={sun} alt="" />
                            <img className={`star-1 ${darkMode ? 'none' : ''} scale-up-center`} src={star1} alt="" />
                            <img className={`star-2 ${darkMode ? 'none' : ''} scale-up-center`} src={star2} alt="" />
                            <img className={`star-3 ${darkMode ? '' : 'none'} scale-up-center`} src={star1} alt="" />
                            <img className={`star-4 ${darkMode ? '' : 'none'} scale-up-center`} src={star1} alt="" />
                            <img className={`star-5 ${darkMode ? '' : 'none'} scale-up-center`} src={star1} alt="" />
                            <img className={`moon ${darkMode ? '' : 'scale-out-left'} scale-up-left `} src={moon} alt="" />
                            <img className={`star-night-1 ${darkMode ? '' : 'none'} scale-up-center`} src={starNight} alt="" />
                            <img className={`star-night-2 ${darkMode ? '' : 'none'} scale-up-center`} src={starNight2} alt="" />


                        </div>
                    </div>
                    <Link
                        className="header-item-wrapper"
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-full" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" /></svg>
                    </Link>
                    <Link
                        className="header-item-wrapper"
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7.05 14.121L4.93 16.243l2.828 2.828L19.071 7.757 16.243 4.93 14.12 7.05l1.415 1.414L14.12 9.88l-1.414-1.415-1.414 1.415 1.414 1.414-1.414 1.414-1.414-1.414-1.415 1.414 1.415 1.414-1.415 1.415L7.05 14.12zm9.9-11.313l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0zM14.12 18.363l1.415-1.414 2.242 2.243h1.414v-1.414l-2.242-2.243 1.414-1.414L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 8.464 7.05 6.343 4.928 4.929 6.343l2.121 2.12-1.414 1.415z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-full" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M5.636 12.707l1.828 1.829L8.88 13.12 7.05 11.293l1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414L13.12 8.88l1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 5.636 9.878z" /></svg>
                    </Link>
                    <Link
                        className="header-item-wrapper"
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.706.028c-.007-.006-3.8-4.115-11.383-12.329a.5.5 0 0 1-.037-.633l3.823-5.256A1 1 0 0 1 4.873 3zm.51 2l-2.8 3.85L12 19.05 21.417 8.85 18.617 5H5.383z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-full" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z" /></svg>
                    </Link>
                    <Link
                        className="header-item-wrapper"
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-full" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" /></svg>
                    </Link>
                    <div className="header-item-wrapper" onClick={this.openPicker}>
                        <div className="text-normal base-color color-text mr-sm">Color:</div>
                        <div className="primary-color-bg" ></div>
                        {showColorPicker && <ChromePicker color={this.state.color} onChange={this.handleChangeComplete} onClick={this.chooseColor} />}
                    </div>

                </div>
                <div className="header flex-container mobile-only switchers" 
                // style={{
                //     transform: `translate(0, ${this.state.slide})`,
                //     transition: 'transform 90ms linear, background 0.5s ease-in',
                // }}
                >
                    <div className="header-item-wrapper">
                        <div className="primary-color-bg" onClick={this.openPicker}></div>
                        {this.state.showColorPicker && <HuePicker className="scale-up-hor-left" color={this.state.color} onChange={this.handleChangeComplete} onClick={this.chooseColor} />}
                    </div>
                    <div className="header-item-wrapper">
                        <div className={`mode-toggler ${darkMode ? 'night' : 'day'}`} onClick={this.changeModes}>
                            <img className={`sun ${darkMode ? 'scale-out-right' : ''} scale-up-right`} src={sun} alt="" />
                            <img className={`star-1 ${darkMode ? 'none' : ''} scale-up-center`} src={star1} alt="" />
                            <img className={`star-2 ${darkMode ? 'none' : ''} scale-up-center`} src={star2} alt="" />
                            <img className={`star-3 ${darkMode ? '' : 'none'} scale-up-center`} src={star1} alt="" />
                            <img className={`star-4 ${darkMode ? '' : 'none'} scale-up-center`} src={star1} alt="" />
                            <img className={`star-5 ${darkMode ? '' : 'none'} scale-up-center`} src={star1} alt="" />
                            <img className={`moon ${darkMode ? '' : 'scale-out-left'} scale-up-left `} src={moon} alt="" />
                            <img className={`star-night-1 ${darkMode ? '' : 'none'} scale-up-center`} src={starNight} alt="" />
                            <img className={`star-night-2 ${darkMode ? '' : 'none'} scale-up-center`} src={starNight2} alt="" />


                        </div>
                    </div>
                </div>
                <div className="header flex-container mobile-only" 
                // style={{
                //     transform: `translate(0, ${this.state.slideInvert})`,
                //     transition: 'transform 90ms linear, background 0.5s ease-in',
                // }}
                >
                    <Link
                        className="header-item-wrapper"
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-full" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" /></svg>
                    </Link>
                    <Link
                        className="header-item-wrapper"
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7.05 14.121L4.93 16.243l2.828 2.828L19.071 7.757 16.243 4.93 14.12 7.05l1.415 1.414L14.12 9.88l-1.414-1.415-1.414 1.415 1.414 1.414-1.414 1.414-1.414-1.414-1.415 1.414 1.415 1.414-1.415 1.415L7.05 14.12zm9.9-11.313l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0zM14.12 18.363l1.415-1.414 2.242 2.243h1.414v-1.414l-2.242-2.243 1.414-1.414L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 8.464 7.05 6.343 4.928 4.929 6.343l2.121 2.12-1.414 1.415z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-full" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M5.636 12.707l1.828 1.829L8.88 13.12 7.05 11.293l1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414L13.12 8.88l1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 5.636 9.878z" /></svg>
                    </Link>
                    <Link
                        className="header-item-wrapper"
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.706.028c-.007-.006-3.8-4.115-11.383-12.329a.5.5 0 0 1-.037-.633l3.823-5.256A1 1 0 0 1 4.873 3zm.51 2l-2.8 3.85L12 19.05 21.417 8.85 18.617 5H5.383z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-full" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z" /></svg>
                    </Link>
                    <Link
                        className="header-item-wrapper"
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-full" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" /></svg>
                    </Link>
                </div>
            </Fragment>
        );
    }
}



export default Header;
