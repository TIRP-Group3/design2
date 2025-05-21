import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import AdminDashboard from './components/AdminDashboard';
import AdminReports from './components/AdminReports';
import AdminPrediction from './components/AdminPrediction';
import AdminScanResult from './components/AdminScanResult';
import AdminDetection from './components/AdminDetection';
import AdminSettings from './components/AdminSettings';
import AdminNotifications from './components/AdminNotifications';

import ClientDashboard from './components/ClientDashboard';
import ClientHistory from './components/ClientHistory';
import ClientReport from './components/ClientReport';
import ClientScanResult from './components/ClientScanResult';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UploadDataset from './components/UploadDataset';
import PublicScan from './components/PublicScan';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/predictions" element={<AdminPrediction />} />
        <Route path="/admin/scan-result" element={<AdminScanResult />} />
        <Route path="/admin/detection" element={<AdminReports />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />

        {/* Client Routes */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/client/history" element={<ClientHistory />} />
        <Route path="/client/report" element={<ClientReport />} />
        <Route path="/client/scan-result" element={<ClientScanResult />} />

        {/* Shared */}
        <Route path="/upload-dataset" element={<UploadDataset />} />
        <Route path="/public-scan" element={<PublicScan />} />
      </Routes>
    </Router>
  );
}

export default App;
