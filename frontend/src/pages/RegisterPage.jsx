import React from "react";
import RegisterForm from "../components/RegisterForm";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-content">
          <div className="logo-container">
            <div className="logo-frame">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8224899b14006d2bd364c36d95aa0077e7517534?placeholderIfAbsent=true"
                className="logo-image"
              />
            </div>
            <div className="logo-text">MalwareGuard</div>
          </div>

          <div className="register-header">
            <div className="register-title-container">
              <div className="register-title">Create your account</div>
              <div className="register-subtitle">
                <span className="register-subtitle-text">
                  Already registered?
                </span>
                <span className="register-signin-link"> Sign in here</span>
              </div>
            </div>

            <div className="register-form-container">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
