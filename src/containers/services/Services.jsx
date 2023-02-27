import React from 'react';
import "./services.css";
import {Service} from "../../components";
import { RiPenNibLine, RiCustomerService2Line, RiBriefcase4Line, RiShieldUserLine, RiContactsLine, RiVipDiamondLine, RiFlashlightLine } from "react-icons/ri";

const serviceItems = [
    {
        Icon: RiShieldUserLine,
        title: "Project Management",
        desc: "30 options available"
    },
    {
        Icon: RiPenNibLine,
        title: "Web & Mobile Development",
        desc: "40 options available"
    },
    {
        Icon: RiCustomerService2Line,
        title: "Customer Support",
        desc: "17 options available"
    },
    {
        Icon: RiContactsLine,
        title: "Human Resources",
        desc: "21 options available"
    },
    {
        Icon: RiVipDiamondLine,
        title: "Design & Creatives",
        desc: "13 options available"
    },
    {
        Icon: RiFlashlightLine,
        title: "Marketing & Communication",
        desc: "27 options available"
    },
    {
        Icon: RiBriefcase4Line,
        title: "Business Development",
        desc: "22 options available"
    },
]

const Services = () => {
    return (
        <div className="saas__services section__padding">
            <h5>OUR SERVICES</h5>
            <h1>Save Time Managing Your Business<br /> With Our Best Services</h1>
            <div className="saas__services-service">
                {serviceItems.map((item, index) => (
                    <Service
                        Icon = {item.Icon}
                        title={item.title}
                        desc={item.desc}
                        key={index}
                    />
                ))}
                <div className="saas__services-service__more">
                    <h3>+4</h3>
                    <h4>More</h4>
                    <p>170+ options available</p>
                </div>
            </div>
        </div>
    )
}

export default Services