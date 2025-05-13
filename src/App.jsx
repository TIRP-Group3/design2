import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminDetectionPage from "./pages/AdminDetectionPage";
import UploadDatasetPage from "./pages/UploadDatasetPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ClientDashboardPage from "./pages/ClientDashboardPage";
import QuickScanPage from "./pages/QuickScanPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin-detection" element={<AdminDetectionPage />} />
        <Route path="/upload-dataset" element={<UploadDatasetPage />} />
        <Route path="/client-dashboard" element={<ClientDashboardPage />} />
        <Route path="/quick-scan" element={<QuickScanPage />} />
      </Routes>
    </Router>
  );
}

export default App;
