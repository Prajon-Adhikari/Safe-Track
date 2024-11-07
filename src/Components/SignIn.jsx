import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="signin-page">
      <form action="" className="user-login-form">
        <div className="signin-information">
          <div className="signin-above-information">
            <h2>Login</h2>
            <p>Hey, Enter your details to get sign in to your account</p>
          </div>
          <div className="field-container">
            <FontAwesomeIcon icon={faEnvelope} className="signup-element" />
            <input
              className="input-field"
              id="email"
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
          </div>
          <div className="field-container">
            <FontAwesomeIcon icon={faLock} className="signup-element" />
            <input
              className="input-field"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
          <p className="other-signin-text">- Or Sign In with -</p>
          <div className="signin-socialmedia">
            <div className="signin-social-container">
              <div className="signin-media">
                <FontAwesomeIcon icon={faGoogle} className="icon" /> Google{" "}
              </div>
            </div>
            <div className="signin-social-container">
              <div className="signin-media">
                <FontAwesomeIcon icon={faFacebookF} className="icon" /> Facebook
              </div>
            </div>
            <div className="signin-social-container">
              <div className="signin-media">
                <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
              </div>
            </div>
          </div>
          <p className="other-signin-text">
            Don't have an account ? <span>Register Now</span>
          </p>
        </div>
      </form>
    </div>
  );
}
