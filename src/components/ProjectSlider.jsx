import React, { Component } from 'react';
import RightArrow from '../assets/images/arrow-right.svg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import macbook from '../assets/images/Macbook-Pro.png'
import play from '../assets/images/play-mini-fill.svg'
import plus from '../assets/images/add-circle-line.svg'
import websites from '../data/data'
import securithings from '../assets/videos/Securithings.mp4'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        width: '75px',
        right: '0',
        height: '75px'
      }}
      onClick={onClick}
    />
  );
}

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block",
//       background: "red",
//       width: '75px', 
//       left: '0' ,
//       height: '75px' 
//       }}
//       onClick={onClick}
//     />
//   );
// }

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow/>
    };
    return (
      <div className="container" id="section2">

        <Slider {...settings}>
          {websites.map((website, i) => (

            <div key={i} className="slider-item flex-container">
              <div className="slider-item-child">
                <div className="video-wrapper">
                  {/* <video  className="video" autoPlay loop>
                    <source src={securithings} type="video/mp4"/>
                      
                    </video> */}
                      <img src={macbook} className="video" />
                </div>
                    <div className="flex-container vertical project-content">
                      <div className="primary-heading base-color left-text full-width">{website.name}</div>
                      <div className="text-normal base-color mb-sm">{website.description}</div>
                      <div className="flex-container full-width flex-start wrap">
                        {website.attributes.map((attr, i) => (

                          <div key={i} className="flex-container space-evenly mr-sm mb-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="primary-color-icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"/></svg>
                            <div className="btn-text base-color">{attr}</div>
                          </div>
                        ))}

                      </div>
                      <div className="btn view-btn flex-container space-evenly">
                      <svg xmlns="http://www.w3.org/2000/svg" className="primary-color-icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>
                        <div className="btn-text base-color">View live website</div>
                      </div>
                    </div>
              </div>
                </div>
          ))}


        </Slider>
            </div>
          );
  }
}