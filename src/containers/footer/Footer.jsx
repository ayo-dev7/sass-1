import React from 'react';
import "./footer.css";
import { RiLinkedinFill, RiMessengerFill, RiTwitterFill, RiHaze2Line, RiMailLine, RiPhoneLine } from "react-icons/ri";

const Footer = () => {
    const Year = new Date().getFullYear()
    return (
        <div className="saas__footer section__padding">
            <div className="saas__footer-links">
                <div className="saas__footer-links__link">
                    <h3>ayo-dev7</h3>
                    <h6>Finance helps companies manage payments easily.</h6>
                    <div className="saas__footer-left__logo">
                        <div>
                            <RiLinkedinFill/>
                        </div>
                        <div>
                            <RiMessengerFill/>
                        </div>
                        <div>
                            <RiTwitterFill/>
                        </div>
                        <div>
                            <RiHaze2Line/>
                        </div>
                    </div>
                </div>
                <div className="saas__footer-links__link">
                    <h4>Company</h4>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Careers</a></p>
                    <p><a href="#">Blog</a></p>
                    <p><a href="#">Pricing</a></p>
                </div>
                <div className="saas__footer-links__link">
                    <h4>Product</h4>
                    <p><a href="#">Invoicing</a></p>
                    <p><a href="#">Contact</a></p>
                    <p><a href="#">Accounting</a></p>
                    <p><a href="#">Proposal</a></p>
                </div>
                <div className="saas__footer-links__link">
                    <h4>Resources</h4>
                    <p><a href="#">Proposal Template</a></p>
                    <p><a href="#">Invoice Template</a></p>
                    <p><a href="#">Tutorial</a></p>
                    <p><a href="#">How to write a contract</a></p>
                </div>
                <div className="saas__footer-links__link">
                    <h4>Contact Us</h4>
                    <div className="saas__contact">
                        <p><RiMailLine style={{marginRight: "0.3rem"}}/><a href="#">ayoadebiyi95@gmail.com</a></p>
                    </div>
                    <div className="saas__contact">
                        <p><RiPhoneLine style={{marginRight: "0.3rem"}}/><a href="#">+234 816 6115 482</a></p>
                    </div>
                </div>
            </div>
            <div className="saas__footer-copyright">
                <p>Copyright @ ayo-dev7 {Year}. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer