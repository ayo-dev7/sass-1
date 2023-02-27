import React from 'react';
import "./management.css";
import { RiAppleFill, RiGooglePlayFill } from "react-icons/ri";

const Management = () => {
    return (
        <div className="saas__management section__padding">
            <h5>Project Management App</h5>
            <h1>
                Download our app and start your free<br/> trail to get started today!
            </h1>
            <p>End-to-end payments and financial management in a single solution.</p>
            <div className="saas__management-button">
                <button type="button">
                    <RiAppleFill style={{marginRight: "0.5rem"}}/> Playstore
                </button>
                <button type="button">
                    <RiGooglePlayFill style={{marginRight: "0.5rem"}}/> Google Play
                </button>
            </div>
        </div>
    )
}

export default Management