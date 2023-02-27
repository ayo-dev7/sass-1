import React from 'react';
import "./process.css";
import { bird } from "../../assets";
import { About } from "../../components";
import { contact, setting, flash } from "../../assets";

const aboutItems = [
    {
        img: contact,
        title: "Register",
        desc: "It more shed went up is roof if loud case. Delay music in lived noise an.",
        shadow: "6px 8px 80px rgba(148, 148, 148, 0.16)",
        border: "none"
    },
    {
        img: setting,
        title: "Complete Setup",
        desc: "Beyond genius really enough passed is up. ‍Up maids me an ample stood given.",
        shadow: "none",
        border: "1px dashed #939393"
    },
    {
        img: flash,
        title: "Utilize App",
        desc: "Certainty say suffering his him collected intention promotion. Hill sold ham men.",
        shadow: "none",
        border: "1px dashed #939393"
    },
]

const Process = () => {
    return (
        <div className="saas__process section__padding">
            <div className="saas__process-image">
                <img src={bird} alt="birds" />
            </div>
            <h3>Learn More About Process</h3>
            <p>Was are delightful solicitude discovered collecting man<br/> day. Resolving neglected sir tolerably.</p>
            <div className="saas__process-items">
                {aboutItems.map((item,index) => (
                    <About
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        shadow={item.shadow}
                        border={item.border}
                    />
                ))}
            </div>
        </div>
    )
}

export default Process