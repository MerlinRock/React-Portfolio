import React from "react";
import resume from "../images/Merlin Rock Resume - Google Docs.pdf"


function Resume() {
    return (
        <div className="hero-body">
            <h1>My Resume</h1>
          <img src={resume} className="resume" />
        </div>
    )
}

export default Resume;