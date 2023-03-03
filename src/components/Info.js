import React from "react";
import swimmer from "../images/swimmer.png"
import stars from "../images/star.png"

export default function Contact(props) {
    return (
        <div className="card">
            <img src={require('../images/'+props.img)} className="card--img" />
            <div className="card--stats">
                <img src={stars} className="card--stars"></img>
                <span>{props.rating}</span>
                <span className="gray">({props.ratedBy}) •</span>
                <span className="gray"> {props.location}</span>
            </div>
            <p>{props.description}
            </p>
            <p><span className="bold">From ${props.price} </span>/ person
            </p>
        </div>
    )
}