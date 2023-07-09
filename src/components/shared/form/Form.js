import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authServices";

function Form({ submitButton, formTitle, formType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) =>
          formType === "login"
            ? handleLogin(e, email, password, role)
            : handleRegister(
                e,
                email,
                password,
                role,
                name,
                organizationName,
                hospitalName,
                website,
                address,
                phone
              )
        }
      >
        <h1>{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check col">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donorRadioDonor"
              value={"donor"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="donorRadio">
              Donor
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donorRadioAdmin"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="donorRadio">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donorRadioOrganization"
              value={"organization"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="donorRadio">
              Organization
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donorRadioHospital"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="donorRadio">
              Hospital
            </label>
          </div>
        </div>
        {(() => {
          // eslint-disable-next-line default-case
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelFor={"email"}
                    labelText={"Email"}
                    name="email"
                    inputType={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelFor={"password"}
                    labelText={"Password"}
                    name="password"
                    inputType={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "donor" || role === "admin") && (
                    <InputType
                      labelFor={"name"}
                      labelText={"Name"}
                      name="name"
                      inputType={"text"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  <InputType
                    labelFor={"email"}
                    labelText={"Email"}
                    name="email"
                    inputType={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelFor={"password"}
                    labelText={"Password"}
                    name="password"
                    inputType={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {role === "organization" && (
                    <InputType
                      labelFor={"organizationName"}
                      labelText={"Organization Name"}
                      name="organizationName"
                      inputType={"text"}
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelFor={"hospitalName"}
                      labelText={"Hospital Name"}
                      name="hospitalName"
                      inputType={"text"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  <InputType
                    labelFor={"website"}
                    labelText={"Website"}
                    name="website"
                    inputType={"text"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelFor={"address"}
                    labelText={"Address"}
                    name="address"
                    inputType={"text"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelFor={"phone"}
                    labelText={"Phone"}
                    name="phone"
                    inputType={"number"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}
        <div className="d-flex">
          {formType === "login" ? (
            <p>
              Not Registered ?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </p>
          ) : (
            <p>
              Already Registered ?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </p>
          )}
        </div>
        <div className="d-flex">
          <button className="btn btn-primary" type="submit">
            {submitButton}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
