import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to verify credentials
    // For now, we'll just navigate to the dashboard
    navigate("/client-dashboard");
  };

  return (
    <div className="form-container">
      <div className="form-tabs">
        <div className="tab-active">Login</div>
        <div className="tab-inactive">Register</div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
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
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
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
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-options">
          <label className="remember-option">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <div className="checkbox-label">Remember me</div>
          </label>
          <div className="forgot-password">Forgot password?</div>
        </div>
        <button type="submit" className="signin-button">Sign In</button>
        <div className="alternative-login">
          <div className="divider-container">
            <div className="divider-text">Or continue with</div>
            <div className="divider-line"></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
