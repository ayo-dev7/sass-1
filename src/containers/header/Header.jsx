import React from 'react';
import "./header.css";
import hero from "../../assets/hero.png";

const Header = () => {
    return (
        <div className="saas__header section__padding">
            <div className="saas__header-content">
                <h3>
                    Product Growth Solution in Single Platform.
                </h3>
                <h1>
                    Managing business payments has never been easier
                </h1>
                <p>
                    Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.
                </p>
                <button type="button">Try for free</button>
                <div className="saas__header-content__text">
                    <div className="saas__header-content__text1">
                        <h3>195k+ Users</h3>
                        <p>Delightful remarkably mr on announcing themselves entreaties favorable.</p>
                    </div>
                    <div className="saas__header-content__text1">
                        <h3>$400m+ Saved</h3>
                        <p>About to in so terms voice at. Equal an would is found seems of and concluded.</p>
                    </div>
                </div>
            </div>
            <div className="saas__header-image">
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Header