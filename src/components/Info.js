import React from "react"
import Profile from "../profile-pic.png";
import Mail from "../Mail.svg";

export default function Main() {
    return (
        <div className="info">
            <img src={Profile} alt="Anime style drawing of Julia Arrington"></img>
            <div>
                <h1>Julia Arrington</h1>
                <h2>Jr. Front-End Developer</h2>
                <a href="partum.github.io" title="Go to Julia's portfolio">partum.github.io</a>
            </div>
            <a id="button" href="mailto:jarring.dev@gmail.com">
                <img src={Mail} alt=""></img>
                Email</a>
        </div>
    )
}