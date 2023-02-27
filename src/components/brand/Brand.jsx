import React from 'react';
import "./brand.css";
import { monday, morpheus, oracle, protons, samsung, segment, zeppel } from "../../assets";

const Brand = () => {
    return (
        <div className="saas__brand section__padding">
            <div className="saas__brand-heading">
                <h3>
                    Over 32k+ software  businesses growing with ayo-dev7
                </h3>
            </div>
            <div className="saas__brand-logos">
                <div>
                    <img src={zeppel} alt="company logo" />
                </div>
                <div>
                    <img src={oracle} alt="company logo" />
                </div>
                <div>
                    <img src={morpheus} alt="company logo" />
                </div>
                <div>
                    <img src={samsung} alt="company logo" />
                </div>
                <div>
                    <img src={monday} alt="company logo" />
                </div>
                <div>
                    <img src={segment} alt="company logo" />
                </div>
                <div>
                    <img src={protons} alt="company logo" />
                </div>
            </div>
        </div>
    )
}

export default Brand