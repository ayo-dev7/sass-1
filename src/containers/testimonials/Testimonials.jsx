import React from 'react';
import "./testimonials.css";
import { testimonials, stars, segment2 } from "../../assets";

const Testimonials = () => {
    return (
        <div className="saas__testimonials section__padding">
            <div className="saas__testimonials-heading">
                <h6>TESTIMONIALS</h6>
                <h1>Check what our clients are saying</h1>
            </div>
            <div className="saas__testimonials-content">
                <div className="saas__testimonials-content__image">
                    <img src={testimonials} alt="" />
                </div>
                <div className="saas__testimonials-content__text">
                    <img src={stars} alt="" />
                    <h3>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.</h3>
                    <div className="saas__testimonials-content__footer">
                        <div className="saas__testimonials-content__footer-text">
                            <h4>ayo-dev7</h4>
                            <p>CEO Labi Tech</p>
                        </div>
                        <div className="saas__testimonials-content__footer-logo">
                            <img src={segment2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials