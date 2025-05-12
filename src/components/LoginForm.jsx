import React from "react";

function LoginForm() {
  return (
    <div className="form-container">
      <div className="form-tabs">
        <div className="tab-active">Login</div>
        <div className="tab-inactive">Register</div>
      </div>
      <div className="login-form">
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <div className="input-wrapper">
            <div className="input-field">
              <div className="input-icon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0bbab1f2c95fd4d5f378a8667b14730653b3bf7?placeholderIfAbsent=true"
                  className="icon-image"
                  alt="Email Icon"
                />
              </div>
              <div className="input-placeholder">Enter your email</div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <div className="input-wrapper">
            <div className="input-field">
              <div className="input-icon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9883b23897696c5aefc294c55f0f3f3281888bbf?placeholderIfAbsent=true"
                  className="icon-image"
                  alt="Password Icon"
                />
              </div>
              <div className="input-placeholder">Enter your password</div>
            </div>
          </div>
        </div>
        <div className="form-options">
          <label className="remember-option">
            <div className="checkbox-input"></div>
            <div className="checkbox-label">Remember me</div>
          </label>
          <div className="forgot-password">Forgot password?</div>
        </div>
        <button className="signin-button">Sign In</button>
        <div className="alternative-login">
          <div className="divider-container">
            <div className="divider-text">Or continue with</div>
            <div className="divider-line"></div>
          </div>
        </div>
        <div className="admin-login-container">
          <button className="admin-login-button">admin login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
