import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminDetectionPage from "./pages/AdminDetectionPage";
import AdminPredictionPage from "./pages/AdminPredictionPage";
import AdminReportsPage from "./pages/AdminReportsPage";
import AdminScanResultPage from "./pages/AdminScanResultPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import AdminNotificationsPage from "./pages/AdminNotificationsPage";
import ClientDashboardPage from "./pages/ClientDashboardPage";
import ClientHistoryPage from "./pages/ClientHistoryPage";
import ClientReportPage from "./pages/ClientReportPage";
import ClientScanResultPage from "./pages/ClientScanResultPage";
import QuickScanPage from "./pages/QuickScanPage";
import UploadDatasetPage from "./pages/UploadDatasetPage";
import ClientSettingsPage from "./pages/ClientSettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/detection" element={<AdminDetectionPage />} />
        <Route path="/admin/prediction" element={<AdminPredictionPage />} />
        <Route path="/admin/reports" element={<AdminReportsPage />} />
        <Route path="/admin/scan-result" element={<AdminScanResultPage />} />
        <Route path="/admin/settings" element={<AdminSettingsPage />} />
        <Route
          path="/admin/notifications"
          element={<AdminNotificationsPage />}
        />
        <Route path="/client/dashboard" element={<ClientDashboardPage />} />
        <Route path="/client/history" element={<ClientHistoryPage />} />
        <Route path="/client/report" element={<ClientReportPage />} />
        <Route path="/client/scan-result" element={<ClientScanResultPage />} />
        <Route path="/client/quick-scan" element={<QuickScanPage />} />
        <Route path="/client/upload-dataset" element={<UploadDatasetPage />} />
        <Route path="/client/settings" element={<ClientSettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
