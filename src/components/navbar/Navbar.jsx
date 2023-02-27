import React, { useState } from 'react';
import "./navbar.css";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="saas__navbar section__padding">
            <div className="saas__navbar-logo">
                <h1><a href="#">ayo-dev7</a></h1>
            </div>
            <div className="saas__navbar-links">
                <div className="saas__navbar-link">
                    <p><a href="#">Product</a></p>
                    <RiArrowDropDownLine
                        style={{
                            marginLeft: "0.3rem",
                            cursor: "pointer"
                        }}
                    />
                </div>
                <div className="saas__navbar-link">
                    <p><a href="#">Template</a></p>
                    <RiArrowDropDownLine
                        style={{
                            marginLeft: "0.3rem",
                            cursor: "pointer"
                        }}
                    />
                </div>
                <div className="saas__navbar-link">
                    <p><a href="#">Blog</a></p>
                </div>
                <div className="saas__navbar-link">
                    <p><a href="#">Pricing</a></p>
                </div>
            </div>
            <div className="saas__navbar-sign">
                <p>Sign In</p>
                <button type='button'>Start Free</button>
            </div>
            <div className="saas__navbar-menu">
                    <div className="saas__navbar-sign__menu">
                        <p>Sign In</p>
                        <button type='button'>Start Free</button>
                    </div>
                    {toggleMenu
                        ?
                            <RiCloseLine
                                size={22}
                                onClick={() => setToggleMenu(false)}
                                cursor= "pointer"
                            />
                        :
                            <RiMenu3Line
                                size={22}
                                onClick={() => setToggleMenu(true)}
                                cursor= "pointer"
                            />
                    }
                    {toggleMenu && (
                        <div className="saas__navbar-menu__container">
                            <div className="saas__navbar-menu__links">
                                <div className="saas__navbar-link">
                                    <p><a href="#">Product</a></p>
                                    <RiArrowDropDownLine
                                        style={{
                                            marginLeft: "0.3rem",
                                            cursor: "pointer"
                                        }}
                                    />
                                </div>
                                <div className="saas__navbar-link">
                                    <p><a href="#">Template</a></p>
                                    <RiArrowDropDownLine
                                        style={{
                                            marginLeft: "0.3rem",
                                            cursor: "pointer"
                                        }}
                                    />
                                </div>
                                <div className="saas__navbar-link">
                                    <p><a href="#">Blog</a></p>
                                </div>
                                <div className="saas__navbar-link">
                                    <p><a href="#">Pricing</a></p>
                                </div>
                            </div>
                            <div className="saas__navbar-menu__sign">
                                <p>Sign In</p>
                                <button type='button'>Start Free</button>
                            </div>
                        </div>
                    )}
                </div>
        </div>
    )
}

export default Navbar