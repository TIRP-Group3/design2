import React from "react";
import AdminLoginSidebar from "../components/AdminLoginSidebar";
import AdminLoginForm from "../components/AdminLoginForm";
import "../styles/AdminLoginPage.css";

function AdminLoginPage() {
  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="admin-login-layout">
          <div className="admin-sidebar-column">
            <AdminLoginSidebar />
          </div>
          <div className="admin-form-column">
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;
