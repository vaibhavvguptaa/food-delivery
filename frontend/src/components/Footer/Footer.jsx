import React from 'react'
import './footer.css'
import { assets } from '../../assets/frontend_assets/assets'


const Footer = () => {
  return (
    <div className= "footer" id='footer'>
<div className="footer-content">
    <div className="footer-content-left">
        <img src={assets.logo} alt="logo" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quia odit alias voluptatem fugiat nulla dolorum ab exercitationem sit voluptas? Vel.</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon } alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />

        </div>
    </div>
    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>privacy Policy</li>
        </ul>
    </div>

    <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+919932323423</li>
            <li>contact@tomato.com</li>
        </ul>
    </div>

</div>
<hr />
<p className="footer-copyright">Copyright 2024 Tomato.com - All rights Reserved.</p>
    </div>
  )
}

export default Footer