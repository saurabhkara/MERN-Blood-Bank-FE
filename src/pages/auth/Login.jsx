import React from "react";
import Form from "../../components/shared/form/Form";

function Login() {
  return (
    <div className="row g-0">
      <div className="col-md-8">
        <img
          src="./assets/banner1.jpg"
          alt="login img"
          className="form-banner"
        />
      </div>
      <div className="col-md-4 form-container">
        <Form formTitle={"Login"} submitButton={"Login"} formType="login" />
      </div>
    </div>
  );
}

export default Login;
