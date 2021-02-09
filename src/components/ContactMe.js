import React from "react";
import './Contact.css';
// import { Section } from 'react-bulma-components';



function Contact() {
  return (
    <div className="hero-body">
      <h1 class="is-size-2 is-family-sans-serif">Reach out to me.</h1>

      <div class="field">
        <label class="label">Your Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" id="elName" />
        </div>
      </div>


      <div class="field">
        <label class="label">Your Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="Email input" id="elEmail" />
          <span class="icon is-small is-left">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select>
              <option id="elSubject1">Freelance job opportunity</option>
              <option id="elSubject2">Requesting job interview</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" id="elMessage"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" id="elSubmit">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" id="elCancel">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Contact;