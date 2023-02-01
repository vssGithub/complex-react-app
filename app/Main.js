import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";

function Main() {
    return (
        <>
            <Header />
            <HomeGuest />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main/>);