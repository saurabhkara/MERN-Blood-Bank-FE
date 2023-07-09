import React from "react";
import Form from "../../components/shared/form/Form";

function Register() {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8">
          <img
            src="./assets/banner2.jpg"
            alt="sign up img"
            className="form-banner"
          />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register"}
            submitButton={"Sign up"}
            formType="register"
          />
        </div>
      </div>
    </>
  );
}

export default Register;
