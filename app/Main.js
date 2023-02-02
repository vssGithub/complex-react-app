import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Terms from "./components/Terms";

function Main() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomeGuest />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
            
            <Footer />
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main/>);