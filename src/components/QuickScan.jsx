import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/QuickScan.css";

const QuickScan = () => {
  const [uploadProgress, setUploadProgress] = useState(75);

  const handleFileUpload = (event) => {
    // Handle file upload logic here
    console.log("File upload triggered");
  };

  const handleBrowseFiles = () => {
    // Trigger file input click
    document.getElementById("file-upload").click();
  };

  const handleDownloadReport = () => {
    // Handle report download logic
    console.log("Download report triggered");
  };

  const handleViewResults = () => {
    // Handle view results logic
    console.log("View results triggered");
  };

  return (
    <div className="quick-scan-container">
      <div className="header">
        <div className="header-content">
          <div className="nav-links">
            <div className="nav-link">Dashboard</div>
            <div className="nav-link active">Quick Scan</div>
            <div className="nav-link">Scan Results</div>
            <div className="nav-link">History</div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="card upload-section">
          <div className="card-title">Upload Dataset</div>
          <div className="upload-area">
            <div>
              <svg
                width="60"
                height="48"
                viewBox="0 0 60 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="upload-icon"
              >
                <path d="M60 48H0V0H60V48Z" stroke="#E5E7EB"></path>
                <path
                  d="M13.5 45C6.04688 45 0 38.9531 0 31.5C0 25.6125 3.76875 20.6063 9.01875 18.7594C9.00937 18.5063 9 18.2531 9 18C9 9.7125 15.7125 3 24 3C29.5594 3 34.4062 6.01875 37.0031 10.5187C38.4281 9.5625 40.1531 9 42 9C46.9688 9 51 13.0312 51 18C51 19.1437 50.7844 20.2313 50.4 21.2438C55.875 22.35 60 27.1969 60 33C60 39.6281 54.6281 45 48 45H13.5ZM20.9062 24.6562C20.025 25.5375 20.025 26.9625 20.9062 27.8344C21.7875 28.7062 23.2125 28.7156 24.0844 27.8344L27.7406 24.1781V36.75C27.7406 37.9969 28.7437 39 29.9906 39C31.2375 39 32.2406 37.9969 32.2406 36.75V24.1781L35.8969 27.8344C36.7781 28.7156 38.2031 28.7156 39.075 27.8344C39.9469 26.9531 39.9562 25.5281 39.075 24.6562L31.575 17.1562C30.6937 16.275 29.2687 16.275 28.3969 17.1562L20.8969 24.6562H20.9062Z"
                  fill="#3B82F6"
                ></path>
              </svg>
            </div>
            <div className="upload-text">
              Drag and drop your dataset here, or
            </div>
            <button className="browse-button" onClick={handleBrowseFiles}>
              Browse Files
            </button>
            <input
              type="file"
              id="file-upload"
              className="hidden-input"
              onChange={handleFileUpload}
            />
            <div className="supported-formats">
              Supported formats: CSV, JSON, XML (Max size: 500MB)
            </div>
          </div>
        </div>

        <div className="card detection-section">
          <div className="card-title">Dataset Detection</div>
          <div className="progress-container">
            <div className="progress-header">
              <div className="progress-text">Processing dataset...</div>
              <div className="progress-percentage">75%</div>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-header">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="info-icon"
                >
                  <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB"></path>
                  <path
                    d="M2 8V5H7V8H2ZM2 10H7V13H2V10ZM9 13V10H14V13H9ZM14 8H9V5H14V8ZM2 1C0.896875 1 0 1.89688 0 3V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V3C16 1.89688 15.1031 1 14 1H2Z"
                    fill="#2563EB"
                  ></path>
                </svg>
                <div className="info-title">Dataset Type</div>
              </div>
              <div className="info-value">Structured Data (CSV)</div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="info-icon"
                >
                  <g clipPath="url(#clip0_1_1250)">
                    <path
                      d="M14.6562 2.5V4C14.6562 5.38125 11.5219 6.5 7.65625 6.5C3.79063 6.5 0.65625 5.38125 0.65625 4V2.5C0.65625 1.11875 3.79063 0 7.65625 0C11.5219 0 14.6562 1.11875 14.6562 2.5ZM12.9438 6.70937C13.5938 6.47813 14.1906 6.18125 14.6562 5.81563V9C14.6562 10.3813 11.5219 11.5 7.65625 11.5C3.79063 11.5 0.65625 10.3813 0.65625 9V5.81563C1.12187 6.18438 1.71875 6.47813 2.36875 6.70937C3.77187 7.20937 5.64062 7.5 7.65625 7.5C9.67188 7.5 11.5406 7.20937 12.9438 6.70937ZM0.65625 10.8156C1.12187 11.1844 1.71875 11.4781 2.36875 11.7094C3.77187 12.2094 5.64062 12.5 7.65625 12.5C9.67188 12.5 11.5406 12.2094 12.9438 11.7094C13.5938 11.4781 14.1906 11.1813 14.6562 10.8156V13.5C14.6562 14.8813 11.5219 16 7.65625 16C3.79063 16 0.65625 14.8813 0.65625 13.5V10.8156Z"
                      fill="#2563EB"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1250">
                      <path
                        d="M0.65625 0H14.6562V16H0.65625V0Z"
                        fill="white"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <div className="info-title">Size</div>
              </div>
              <div className="info-value">245 MB</div>
            </div>
          </div>
        </div>

        <div className="card actions-section">
          <div className="action-buttons">
            <button className="secondary-button" onClick={handleDownloadReport}>
              Download Report
            </button>
            <button className="primary-button" onClick={handleViewResults}>
              Scan Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickScan;
