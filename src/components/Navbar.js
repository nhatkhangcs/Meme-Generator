import React from "react";
import imgLogo from "../images/react-logo.png"
export default function main(){
    return (
        <nav>
            <img src = {imgLogo} width = "50px" className="nav--icon"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}