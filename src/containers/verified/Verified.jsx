import React from 'react';
import "./verified.css";
import { trial } from "../../assets";

const Verified = () => {
    return (
        <div className="saas__verified section__padding">
            <div className="saas__verified-image">
                <img src={trial} alt="" />
            </div>
            <div className="saas__verified-content">
                <h1>My little garret repair to desire he esteem.</h1>
                <p>
                Just like we said before, we have tons of features that will helps you to manage you wallet. From income, outcome, montly usage, and etc.
                </p>
                <button type="button">Try for free</button>
            </div>
        </div>
    )
}

export default Verified