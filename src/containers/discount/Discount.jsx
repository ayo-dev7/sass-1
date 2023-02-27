import React from 'react';
import "./discount.css";
import { Card } from "../../components";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";

const cardDetails = [
    {
        title: "BASIC PLAN",
        price: "$0",
        desc: "Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured.",
        Icon1: RiCheckboxCircleFill,
        Icon2: RiCheckboxCircleFill,
        Icon3: RiCloseCircleFill,
        Icon4: RiCloseCircleFill,
        offer1: "Customer Support",
        offer2: "Free User Account",
        offer3: "Monthly Reports",
        offer4: "Multiple Devices",
        btnText: "Join for free",
        h3Color: "#05796B",
        priceColor: "#282828",
        mainColor: "#8593A3",
        bg: "#fff",
        boxShadow: "box-shadow: 0px 8px 80px rgba(167, 167, 167, 0.24)",
        border: "1px solid rgba(133, 147, 163, 0.32)"
    },
    {
        title: "PREMIUM PLAN",
        price: "$49",
        desc: "On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe.",
        Icon1: RiCheckboxCircleFill,
        Icon2: RiCheckboxCircleFill,
        Icon3: RiCheckboxCircleFill,
        Icon4: RiCheckboxCircleFill,
        offer1: "Customer Support",
        offer2: "Up to 10 users",
        offer3: "Monthly Reports",
        offer4: "Multiple Devices Supported",
        btnText: "Get the premium",
        h3Color: "#fff",
        priceColor: "#fff",
        mainColor: "#fff",
        bg: "#05796B",
        boxShadow: "0px 8px 80px rgba(5, 121, 107, 0.32)",
        border: "1px solid rgba(255, 255, 255, 0.32)"
    }
]

const Discount = () => {
    return (
        <div className="saas__discount section__padding">
            <div className="saas__discount-heading">
                <h1>Start today, with free or premium plan, you choose</h1>
                <p>With lots of unique and useful features, you can easily manage your wallet easily without any problem.</p>
            </div>
            <div className="saas__discount-cards">
                <div className="saas__discount-cards-card">
                    {cardDetails.map((item, index) => (
                        <Card
                            title={item.title}
                            price={item.price}
                            desc={item.desc}
                            Icon1={item.Icon1}
                            Icon2={item.Icon2}
                            Icon3={item.Icon3}
                            Icon4={item.Icon4}
                            offer1={item.offer1}
                            offer2={item.offer2}
                            offer3={item.offer3}
                            offer4={item.offer4}
                            btnText={item.btnText}
                            h3Color={item.h3Color}
                            priceColor={item.priceColor}
                            mainColor={item.mainColor}
                            bg={item.bg}
                            boxShadow={item.boxShadow}
                            border={item.border}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Discount