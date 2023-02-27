import React from 'react';
import "./service.css";
import { RiPenNibLine, RiCustomerService2Line, RiBriefcase4Line, RiShieldUserLine, RiContactsLine, RiVipDiamondLine, RiFlashlightLine } from "react-icons/ri";

const Service = ({Icon, title, desc}) => {
    return (
        <div className="saas__service">
            <div className="saas__service-icon">
                <Icon />
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Service