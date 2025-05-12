import React from "react";
import { useNavigate } from "react-router-dom";

function AdminLoginForm() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    // 这里可以加登录校验逻辑
    navigate("/admin-dashboard");
  };
  return (
    <div className="admin-form-container">
      <div className="admin-form-title">
        Welcome back <span className="admin-highlight">admin</span>
      </div>
      <div className="admin-form-subtitle">
        Please sign in to your <span className="admin-highlight">admin</span>{" "}
        account
      </div>
      <div className="admin-form-group">
        <label className="admin-form-label">Email</label>
        <input
          type="email"
          className="admin-input-field"
          placeholder="Enter your email"
        />
      </div>
      <div className="admin-form-group">
        <label className="admin-form-label">Password</label>
        <input
          type="password"
          className="admin-input-field"
          placeholder="Enter your password"
        />
      </div>
      <div className="admin-form-options">
        <label className="admin-remember-option">
          <input type="checkbox" className="admin-checkbox" />
          <span className="admin-checkbox-label">Remember me</span>
        </label>
        <a href="#" className="admin-forgot-password">
          Forgot password?
        </a>
      </div>
      <button className="admin-signin-button" onClick={handleSignIn}>Sign In</button>
      <div className="admin-client-login-container">
        <button className="admin-client-login-button">Client login</button>
      </div>
    </div>
  );
}

export default AdminLoginForm;
