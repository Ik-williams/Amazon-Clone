import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__one">
        <h4>Back to top</h4>
      </div>
      <div className="footer__middle">
        <div className="footer__row">
          <h3>Made by Ik Williams</h3>
        </div>
      </div>
      <div className="footer__bottom">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="footer__logo" />
      </div>
    </div>
  );
}

export default Footer;