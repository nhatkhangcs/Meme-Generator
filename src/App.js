import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
export default function App(){
    return (
        <div className="my--app">
            <Navbar/>
            <Hero/>
            <Card/>
        </div>
    )
}