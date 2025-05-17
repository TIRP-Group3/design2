import React from "react";

function LoginSidebar() {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <div className="logo-frame">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/65b46adaeeb8fef4087c8dacc262fde3831de979?placeholderIfAbsent=true"
            className="logo-image"
            alt="MalwareGuard Logo"
          />
        </div>
        <div className="logo-text">MalwareGuard</div>
      </div>
      <div className="sidebar-content">
        <h1 className="sidebar-title">Secure Malware Detection Platform</h1>
        <p className="sidebar-description">
          Advanced AI-powered system for real- time threat detection and
          analysis
        </p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73721e668a4f29e8288654170a1550b231c5ba45?placeholderIfAbsent=true"
          className="sidebar-divider"
          alt="Divider"
        />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34f4ce8cccd6c4cd644d906c428dc318cf48f688?placeholderIfAbsent=true"
        className="sidebar-illustration"
        alt="Security Illustration"
      />
    </div>
  );
}

export default LoginSidebar;
