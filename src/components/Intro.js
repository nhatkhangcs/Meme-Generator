import React from "react";
import myAvt from "../images/MyAvatar.jpg"
import Table from 'react-bootstrap/Table';
import { GrMail } from "react-icons/gr"
import {AiFillLinkedin} from "react-icons/ai"
export default function Intro() {
    return (
        <div className="intro-block">
            <img src={myAvt} alt="My avatar" className="intro-avt"></img>
            <h1 className="intro-name">Henry Le</h1>
            <h4 className="intro-title">Computer Vision interns</h4>
            <p className="intro-web">henryle.website</p>
            <Table striped="columns intro-columns">
                <thead className="intro-contact-row">
                    <tr>
                        <th className="intro-email">
                            <GrMail className="intro-icon"/>
                            <p>Email</p>
                        </th>
                        <th className="intro-linkedin">
                            <AiFillLinkedin className="intro-icon"/>
                            <p>linkedIn</p>
                        </th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}