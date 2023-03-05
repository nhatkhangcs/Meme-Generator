import React from "react";
import memeData from "../assets/memeData"
export default function Meme() {
    // let str = "Get a new meme image  🖼";
    const [memeImg, setMemeImg] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)
    function randomFunction(e) {
        let memesImg = allMemeImages.data.memes
        let i = Math.floor(Math.random() * allMemeImages.data.memes.length)
        setMeme(meme => {
            return {
                ...meme,
                randomImage: memesImg[i].url
            }
        })

    }
    return (
        <main>
            <form className="form--block">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button type="button" onClick={randomFunction} className="form--button">Get a new meme image  🖼</button>
            </form>
            <div className="form--meme">
                <img src={meme.randomImage} width="100%" className="form--meme-img"></img>
            </div>
        </main>
    )
}