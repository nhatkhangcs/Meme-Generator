import React from "react";
export default function Meme() {
    const [memeImg, setMemeImg] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    },[])
    const [allMemes, setAllMemeImages] = React.useState()
    function randomFunction(e) {
        let memesImg = allMemes.data.memes
        let i = Math.floor(Math.random() * allMemes.data.memes.length)
        setMeme(meme => {
            return {
                ...meme,
                randomImage: memesImg[i].url
            }
        })
    }
    function handleChange(event) {
        setMeme(prevMeme => {
            const {name, value} = event.target
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    return (
        <main>
            <form className="form--block">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button type="button" onClick={randomFunction} className="form--button">Get a new meme image  🖼</button>
            </form>
            <div className="form--meme">
                <img src={meme.randomImage} width="100%" className="form--meme-img"></img>
                <h2 className="form--meme-text top">{meme.topText}</h2>
                <h2 className="form--meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}