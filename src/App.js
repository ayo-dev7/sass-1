import React from 'react';
import "./App.css";
import { Brand, Management, Navbar } from "./components";
import { CTA, Discount, Footer, Header, Process, Services, Testimonials, Verified } from "./containers";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <Services/>
            <Process/>
            <Management/>
            <Verified/>
            <Discount/>
            <Testimonials/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default App