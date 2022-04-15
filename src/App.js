import React from "react"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import "./style.css";


export default function App() {
    return (
        <div className="container">
            <About />
           <Interests />
           <Footer />
        </div>
    )
}