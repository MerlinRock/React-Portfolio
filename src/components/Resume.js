import React from "react";
import resumePNG from "../images/MerlinRockResume.png"
import resumePDF from "../images/MerlinRockResume.pdf"
import { Link } from "react-router-dom";
import './Resume.css';


function Resume() {
    return (
        <div className="hero-body resume">
            <a href={resumePDF} download>Download Merlin's Resume</a>
            <hr></hr>

            <img src={resumePNG} />
        </div>
    )
}

export default Resume;