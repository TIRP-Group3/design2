"use client";
import React from "react";
import LoginSidebar from "../components/LoginSidebar";
import LoginForm from "../components/LoginForm";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-layout">
          <div className="login-sidebar-column">
            <LoginSidebar />
          </div>
          <div className="login-form-column">
            <div style={{ display: "flex", gap: "40px", marginBottom: "30px", justifyContent: "center", alignItems: "center" }}>
              <span style={{ fontWeight: "bold", color: "#6C63FF", fontSize: "20px", cursor: "pointer" }}>Login</span>
              <span
                style={{ color: "#aaa", fontSize: "20px", cursor: "pointer" }}
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </div>
            <LoginForm />
            <button
              style={{ color: "red", fontWeight: "bold", marginTop: "20px", background: "white", border: "1px solid #ccc", borderRadius: "10px", padding: "10px 30px", cursor: "pointer" }}
              onClick={() => navigate("/admin-login")}
            >
              admin login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
