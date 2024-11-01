import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMobile,
  faUser,
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signup-page">
      <form action="" className="user-registration-form">
        <div className="signup-information">
          <div className="signup-above-information">
            <h2>
              Create <span>Account</span>
            </h2>
            <div className="signup-media">
              <div className="media-container signup-facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="media-container">
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <div className="media-container">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
            <p>or use your email for registration</p>
          </div>
          <div className="field-container">
            <FontAwesomeIcon icon={faUser} className="signup-element" />
            <input
              className="input-field"
              id="fullname"
              type="text"
              placeholder="Full Name"
              required
              autoComplete="off"
            />
          </div>
          <div className="field-container">
            <FontAwesomeIcon icon={faMobile} className="signup-element" />
            <input
              className="input-field"
              id="mobile"
              type="number"
              placeholder="Mobile"
              required
            />
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
          <div className="bottom-signup-information">
            Already have an account ?{" "}
            <Link to="/signin" className="signin-span">
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
