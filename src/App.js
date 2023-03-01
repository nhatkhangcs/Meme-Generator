import React from "react";
import Intro from "./components/Intro"
import Content from "./components/Content"
import Footer from "./components/Footer"

export default function App(){
    return (
        <body className="App">
            <Intro/>
            <Content/>
            <Footer/>
        </body>
    )
}