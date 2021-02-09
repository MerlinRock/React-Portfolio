import React from "react";
import './Portfolio.css';
import HappyTrailsImg from "../images/happy-trails.png"
import WorkDaySchedulerImg from "../images/work-day-scheduler.png"
import RandomPasswordGeneratorImg from "../images/password-generator.png"
// import HappyTrailsImg from "../images/happy-trails.png"


function Portfolio() {
  return (
    <div className="hero-body container is-fullheight is-centered">
      <div class="is-size-1 has-text-centered is-family-code has-text-weight-bold">
        <p>My App Creations</p>
      </div>

      <br/>
      <br/>

      <div class="column has-text-centered">
        <p class="is-size-4 has-text-weight-bold">Are you an avid hiker?</p>
        <p class="is-size-4 has-text-weight-bold">Not sure where to hike? </p>

        <p> Say hello to
          <a href="https://merlinrock.github.io/HappyTrails/" target="_blank" class="is-size-6">Happy Trails</a>
          ! This app is designed for hikers and those who just plain down love exploring. You can choose to 
          share your location or you can simply enter a zip code or city of the area you would like to go hiking at. 
          Then you will be prompted to say how far you are willing to travel to get to your hiking trail and how long 
          you would like to hike. After these few inputs, it wil populate hiking trails based on the given criteria. 
          Other notable fetures are being able to add trails to favorites and each trail has a link to much more in depth 
          details about the trail as well as directions to the trail. Happy hiking with Happy Trails!
        </p>
        <a href="https://merlinrock.github.io/HappyTrails/" target="_blank">
          <img src={HappyTrailsImg} alt="Image of happy trails landing page" />
        </a>
      </div>
      <br></br>
      <br></br>

      <hr></hr>
      <br></br>

      <div class="column has-text-centered">
        <p class="is-size-4 has-text-weight-bold">Busy work schedule?</p>
        <p>Let 
          <a href="https://merlinrock.github.io/Work-Day-Scheduler/" target="_blank" class="is-size-6">Work Day Scheduler</a>
          help keep you on track in a days time! This app features an hourly scheduler from 9AM to 5PM. Hours past are 
          shown in gray, present hour is red and hours future are green. Notes can be saved in each hour block and will 
          persist even if you close the page and come back later. 
        </p>
        <a href="https://merlinrock.github.io/Work-Day-Scheduler/" target="_blank">
          <img src={WorkDaySchedulerImg} alt="Image of work day scheduler landing page" />
        </a>
      </div>
      <br></br>
      <br></br>

      <hr></hr>
      <br></br>

      <div class="column has-text-centered">
        <p class="is-size-4 has-text-weight-bold">Stay protected online!</p>
        <p> 
          <a href="https://merlinrock.github.io/Password-Generator/" target="_blank" class="is-size-6">Password Generator</a>
          is a random password generator. In todays age, it's more important than ever to make sure you have a secure 
          password on any online accounts you may have. Password Generator makes creating a strong and secure password 
          easy as one two three. Simply click 'Generate Password' and follow the prompts. After you choose the criteria 
          for the password, it will generate a random password based on the criteria you chose. You can then copy it to your 
          clipboard and use it. 
        </p>
        <a href="https://merlinrock.github.io/Password-Generator/" target="_blank">
          <img src={RandomPasswordGeneratorImg} alt="Image of password generator landing page" />
        </a>
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default Portfolio;