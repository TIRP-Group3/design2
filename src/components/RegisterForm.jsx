import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Full Name</label>
        <div className="input-wrapper">
          <input
            type="text"
            name="fullName"
            className="form-input"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Email address</label>
        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <div className="input-wrapper">
          <div className="password-input-container">
            <input
              type="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8899471ce3e566da1c76b5dc4f9bf2a9b95f6982?placeholderIfAbsent=true"
              className="password-icon"
              alt="Show password"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Confirm Password</label>
        <div className="input-wrapper">
          <div className="password-input-container">
            <input
              type="password"
              name="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/104857389dff7a4e7c34729c79a2f3ed84ecda2e?placeholderIfAbsent=true"
              className="password-icon"
              alt="Show password"
            />
          </div>
        </div>
      </div>

      <div className="terms-container">
        <div className="terms-checkbox-container">
          <input
            type="checkbox"
            name="agreeToTerms"
            className="terms-checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          <label className="terms-label">
            <span>I agree to the</span>
            <span className="terms-link">Terms</span>
            <span>and</span>
            <span className="terms-link">Privacy Policy</span>
          </label>
        </div>
      </div>

      <div className="submit-button-container">
        <button type="submit" className="submit-button">
          Create Account
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
