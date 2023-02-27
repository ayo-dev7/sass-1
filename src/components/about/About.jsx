import React from 'react';
import "./about.css";

const About = ({img, title, desc, border, shadow}) => {
    console.log(img);
    return (
        <div className="saas__about">
            <div
                className="saas__about-icon"
                style={{
                    boxShadow: {shadow},
                    border: {border}
                }}
            >
                <img src={img} alt="" />
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}

export default About