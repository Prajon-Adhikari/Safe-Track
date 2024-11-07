import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMobile,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export default function EmployeeRegistration() {
  const [serviceSelected, setServiceSelected] = useState("");

  function handleServiceSelected(event) {
    setServiceSelected(event.target.value);
  }
  return (
    <div className="employee-registraion-page">
      <form action="" className="employee-registraion-form">
        <div className="upper-register-information">
          <h2>Registration</h2>
          <p>enter your information for registration</p>
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
            type="text"
            placeholder="Mobile Number"
            required
            autoComplete="off"
          />
        </div>
        <div className="field-container">
          <FontAwesomeIcon icon={faAddressBook} className="signup-element" />
          <input
            className="input-field"
            id="address"
            type="text"
            placeholder="Address"
            required
            autoComplete="off"
          />
        </div>
        <div className="field-container">
          <select
            name=""
            id=""
            className={`input-field service-selector ${
              serviceSelected === "" ? "grey" : ""
            }`}
            value={serviceSelected}
            onChange={handleServiceSelected}
            required
          >
            <option value="" className="option">
              Select a service
            </option>
            <option value="police" className="option">
              Police
            </option>
            <option value="ambulance" className="option">
              Ambulance
            </option>
            <option value="firebrigade" className="option">
              Fire Brigade
            </option>
          </select>
        </div>
        <div className="submit-btn-container">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
