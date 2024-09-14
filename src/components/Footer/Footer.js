import React from 'react'
import './Footer.css'
import youtube_icon from "../../assets/youtube.png";
import instagram_icon from "../../assets/instagram.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className='footer-icons'>
                <img src={youtube_icon} alt=""/>
                <img src={instagram_icon} alt=""/>
            </div>
            <ul className='text-white'>
                <li>Audio Description</li>
                <li>Help Centre</li>
                <li>Media Centre</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
            </ul>
            <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>
        </div>
    )
}

export default Footer;