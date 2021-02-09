import React from "react";
import './AboutMe.css';
import me from "../images/Merlin.png"


function AboutMe() {
    return (
        <div className="hero-body">
            
            <img src={me} className="logo" />
            
            <h1>
                Hello, my name is Merlin. 
            </h1>

            <h4>No, I'm not a magician</h4>

            <p>
                I am an aspiring 'Full Stack Web Developer'. 
                I have a very curios mind which means when something is thrown at me that I do not understand, 
                I WILL understand it in detail someday (sooner than later).
                Have you ever encountered something in your life and you couldn't help but think how does this work, 
                why is that happening, what is the reason it's done that way, etc. The list of questions could go on... 
                As Albert Einstein once said, "I have no special talents. I am only passionately curious." Yeh that's me!
            </p>

            <hr></hr>

            <p>
                Computer programming was one of those curiosities in my life. I once was a bookkeeper and spent alot of 
                time using Excel. Eventually I ran across this thing called Excel VBA so naturally I had to figure out 
                how Excel VBA worked and how it could simplify my life. After mastering Excel VBA, my darn curious mind 
                started wondering again, hence the reason I now sit behind my computer muttering things like, "my code 
                looks right, why isn't it working..?" or "I don't understand why it works, but hey, I'll take it!"
            </p>

            <p>
                My full stack journey has been fun and challenging. I graduated from Penn LPS Coding Bootcamp on 
                February 19th of 2021 and I am currently looking for a fulltime remote job. Check out my resume by 
                clicking the resume link above. 
            </p>
        </div>
    )
}

export default AboutMe;