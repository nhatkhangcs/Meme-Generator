import React from "react";
import {AiFillFacebook} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
export default function Footer(){
    return(
        <div className="footer-block">
            <div className="footer-icon">
                <AiFillFacebook/>
            </div>
            <div className="footer-icon">
                <BsInstagram/>
            </div>
            <div className="footer-icon">
                <AiFillGithub/>
            </div>
            <div className="footer-icon">
                <AiFillTwitterSquare></AiFillTwitterSquare>
            </div>
        </div>
    )
}