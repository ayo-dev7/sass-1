import React from 'react';
import "./card.css";

const Card = ({title, price, Icon1, Icon2, Icon3, Icon4, desc, offer1, offer2, offer3, offer4, btnText, h3Color, priceColor, mainColor, bg, boxShadow, border}) => {
    console.log(h3Color)
    return (
        <div className="saas__card" style={{background: `${bg}`, boxShadow: `${boxShadow}`}}>
            <h3
                style={{
                    color: `${h3Color}`
                }}
            >
                {title}
            </h3>
            <div className="saas__card-price">
                <h1 style={{color: `${priceColor}`}}>{price}</h1>
                <p style={{color: `${mainColor}`}}>Per month</p>
            </div>
            <p style={{color: `${mainColor}`}}>{desc}</p>
            <div className="saas__card-offers">
                <div className="saas__card-offer">
                    <Icon1
                        style={{
                            color: `${h3Color}`
                        }}
                    />
                    <h6 style={{color: `${mainColor}`}}>{offer1}</h6>
                </div>
                <div className="saas__card-offer">
                    <Icon2
                        style={{
                            color: `${h3Color}`
                        }}
                    />
                    <h6 style={{color: `${mainColor}`}}>{offer2}</h6>
                </div>
                <div className="saas__card-offer">
                    <Icon3
                        style={{
                            color: `${h3Color}`
                        }}
                    />
                    <h6 style={{color: `${mainColor}`}}>{offer3}</h6>
                </div>
                <div className="saas__card-offer">
                    <Icon4
                        style={{
                            color: `${h3Color}`
                        }}
                    />
                    <h6 style={{color: `${mainColor}`}}>{offer4}</h6>
                </div>
            </div>
            <button
                type='button'
                style={{
                    border: `${border}`
                }}
            >
                {btnText}
            </button>
        </div>
    )
}

export default Card