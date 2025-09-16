import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="Profile" />
            <h1><span>I’m Anjali Gupta, </span>A passionate Web Developer crafting responsive, user-friendly websites and web apps.</h1>
            <p>
                I’m a web developer focused on building responsive, user-friendly websites and apps with clean code and modern design.
            </p>

            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
                </div>

                <div className="hero-resume">
                    <a 
                      href="/Anjali-Resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="anchor-link"
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Hero;
