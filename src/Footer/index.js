import React from "react";
// import US from "../assets/US.png";
import US from '../Assets/US.png'
import Star from "../Assets/Star.png";
import Frame from "../Assets/Frame.png";
import mdiLinkedin from "../Assets/mdi_linkedin.png";
import gpay from "../Assets/gpay.png";
import maset from "../Assets/maset.png";
import paypal from "../Assets/paypal.png";
import ame from "../Assets/ame.png";
import appay from "../Assets/appay.png";
import pay from "../Assets/pay.png";
// import "../styles/Footer.css";

import './index.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="start-container">
        <div className="bethe-container">
          <h1 className="be-heading">Be the first to know</h1>
          <p className="sing-up-con">Sign up for updates from mettā muse.</p>
          <div className="input">
            <input type="text" id="" placeholder="Enter your e-mail..." />
            <button type="button" className="sub-but">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="contact">
          <p className="cons">CONTACT US</p>
          <p className="num">+44 221 133 5360</p>
          <p className="custo">customercare@mettamuse.com</p>
          <h2 className="curr">Currency</h2>
          <div className="cun-img-container">
            <img src={US} alt="US Img" />
            <img src={Star} alt="Star" className="star" />
            <p>USD</p>
          </div>
          <p className="transaction">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      {/* ending */}
      <hr />
      <div className="end-container">
        <ul>
          <li className="ul-li-head">mettā muse</li>
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
        <ul>
          <li className="ul-li-head">Quick Links</li>
          <li>Orders & Shipping</li>
          <li>Join/Login as a Seller</li>
          <li>Payment & Pricing</li>
          <li>Return & Refunds</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className="follow-container">
          <h1 className="follw-heading">FOLLOW US</h1>
          <div className="follow-img-container">
            <img src={Frame} alt="" />
            <img src={mdiLinkedin} alt="" />
          </div>
          <h1 className="meta-head">
            mettā muse <span>Accepts</span>{" "}
          </h1>
          <div className="pay-img-container">
            <img src={gpay} alt="gpay" />
            <img src={maset} alt="maset" />
            <img src={paypal} alt="paypal" />
            <img src={ame} alt="ame" />
            <img src={appay} alt="appay" />
            <img src={pay} alt="pay" />
          </div>
        </div>
      </div>
      <p className="copyrig">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;