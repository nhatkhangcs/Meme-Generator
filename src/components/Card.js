import React from "react";
import Contact from "./Info";
const myData = [
    {
        img: "swimmer.png",
        rating: 5,
        ratedBy: 6,
        location: "USA",
        description: "Life lessons with Katie Zaferes",
        price: 136,
    },
    {
        img: "wedding.png",
        rating: 5,
        ratedBy: 30,
        location: "USA",
        description: "Learn wedding photography",
        price: 125,
    },
    {
        img: "bike.png",
        rating: 5,
        ratedBy: 2,
        location: "Austria",
        description: "Group Mountain Biking",
        price: 50,
    },
]
export default function Card() {

    return (
        <div className="card--list">
            {myData.map(data => {
                return (<Contact 
                img = {data.img}
                rating = {data.rating}
                ratedBy = {data.ratedBy}
                location = {data.location}
                description = {data.description}
                price = {data.price}
                />)
            })}
        </div>
    )
}