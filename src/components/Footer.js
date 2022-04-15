import React from "react";
import GitHubIcon from "../GitHub Icon.svg";
import LinkedInIcon from "../Linkedin Icon.svg"

export default function Main() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/julia-arrington" title="View my LinkedIn page.">
                <img src={LinkedInIcon} alt="LinkedIn logo."></img>
            </a>
            <a href="https://github.com/partum" title="View my GitHub account">
                <img src={GitHubIcon} alt="GitHub logo."></img>
            </a>
        </div>
    )
}