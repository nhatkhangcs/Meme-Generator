import React from "react";

export default function Header() {
    return (
        <header className="header--block">
            <div className="header--logo">
                <img src={require("../images/troll-face.png")} className="header--img"></img>
                <h1 className="header--name">Meme generator</h1>
            </div>
            <p className="header--course">React Course - Project 3</p>
        </header>
    )
}