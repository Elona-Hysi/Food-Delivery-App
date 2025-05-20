import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>Savor the finest dishes, crafted with care and delivered fresh to you.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privatcy policy</li>
          </ul>
        </div>
        <div className="foot-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+355-346-113-527</li>
            <li>contact@greenly.com</li>
          </ul>
        </div>
      </div>
     <hr/>
     <p className='footer-copyright'>Copyright 2025 Greenly.com - All Right Reserved.</p> 
    </div>
  )
}

export default Footer
