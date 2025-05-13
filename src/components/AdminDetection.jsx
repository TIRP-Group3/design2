import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDetection() {
  const navigate = useNavigate();

  return (
    <div className="detection-container">
      <header className="detection-header">
        <div className="header-content">
          <div className="header-main">
            <div className="header-left">
              <div className="logo-container">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_1624)">
                    <path
                      d="M15 0C15.2695 0 15.5391 0.0585938 15.7852 0.169922L26.8184 4.85156C28.1074 5.39648 29.0684 6.66797 29.0625 8.20312C29.0332 14.0156 26.6426 24.6504 16.5469 29.4844C15.5684 29.9531 14.4316 29.9531 13.4531 29.4844C3.35742 24.6504 0.966793 14.0156 0.937496 8.20312C0.931637 6.66797 1.89257 5.39648 3.18164 4.85156L14.2207 0.169922C14.4609 0.0585938 14.7305 0 15 0ZM15 3.91406V26.0625C23.0859 22.1484 25.2598 13.4824 25.3125 8.28516L15 3.91406Z"
                      fill="#2563EB"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_1624">
                      <path d="M0 0H30V30H0V0Z" fill="white"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="platform-name">MalwareGuard</div>
              <div className="nav-container">
                <div className="nav-items">
                  <div
                    className="nav-item"
                    onClick={() => navigate("/admin-dashboard")}
                  >
                    Dashboard
                  </div>
                  <div className="nav-item active">Detection</div>
                  <div
                    className="nav-item"
                    onClick={() => navigate("/upload-dataset")}
                  >
                    Upload Dataset
                  </div>
                  <div className="nav-item">Settings</div>
                  <div className="nav-item">Predictions</div>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="mobile-menu">
                <i className="ti ti-menu-2"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="detection-main">
        <div className="detection-title">Malware Detection Overview</div>

        {/* Stats Cards Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <div className="stat-label">Total Scans</div>
                <div className="stat-value">1,234</div>
              </div>
              <div className="stat-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_1647)">
                    <path
                      d="M19.5 9.75C19.5 11.9016 18.8016 13.8891 17.625 15.5016L23.5594 21.4406C24.1453 22.0266 24.1453 22.9781 23.5594 23.5641C22.9734 24.15 22.0219 24.15 21.4359 23.5641L15.5016 17.625C13.8891 18.8062 11.9016 19.5 9.75 19.5C4.36406 19.5 0 15.1359 0 9.75C0 4.36406 4.36406 0 9.75 0C15.1359 0 19.5 4.36406 19.5 9.75ZM9.75 16.5C10.6364 16.5 11.5142 16.3254 12.3331 15.9862C13.1521 15.647 13.8962 15.1498 14.523 14.523C15.1498 13.8962 15.647 13.1521 15.9862 12.3331C16.3254 11.5142 16.5 10.6364 16.5 9.75C16.5 8.86358 16.3254 7.98583 15.9862 7.16689C15.647 6.34794 15.1498 5.60382 14.523 4.97703C13.8962 4.35023 13.1521 3.85303 12.3331 3.51381C11.5142 3.17459 10.6364 3 9.75 3C8.86358 3 7.98583 3.17459 7.16689 3.51381C6.34794 3.85303 5.60382 4.35023 4.97703 4.97703C4.35023 5.60382 3.85303 6.34794 3.51381 7.16689C3.17459 7.98583 3 8.86358 3 9.75C3 10.6364 3.17459 11.5142 3.51381 12.3331C3.85303 13.1521 4.35023 13.8962 4.97703 14.523C5.60382 15.1498 6.34794 15.647 7.16689 15.9862C7.98583 16.3254 8.86358 16.5 9.75 16.5Z"
                      fill="#3B82F6"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_1647">
                      <path d="M0 0H24V24H0V0Z" fill="white"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <div className="stat-label">Threats Detected</div>
                <div className="stat-value threat-value">47</div>
              </div>
              <div className="stat-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_1655)">
                    <path
                      d="M13.5 1.5C13.5 0.670312 12.8297 0 12 0C11.1703 0 10.5 0.670312 10.5 1.5V2.03906C10.5 4.37813 7.67344 5.55 6.01875 3.89531L5.63437 3.51562C5.04844 2.92969 4.10156 2.92969 3.51562 3.51562C2.92969 4.10156 2.92969 5.05313 3.51562 5.63906L3.9 6.02344C5.55 7.67344 4.37813 10.5 2.03906 10.5H1.5C0.670312 10.5 0 11.1703 0 12C0 12.8297 0.670312 13.5 1.5 13.5H2.03906C4.37813 13.5 5.55 16.3266 3.89531 17.9813L3.51562 18.3656C2.92969 18.9516 2.92969 19.9031 3.51562 20.4891C4.10156 21.075 5.05313 21.075 5.63906 20.4891L6.02344 20.1047C7.67812 18.45 10.5047 19.6219 10.5047 21.9609V22.5C10.5047 23.3297 11.175 24 12.0047 24C12.8344 24 13.5047 23.3297 13.5047 22.5V21.9609C13.5047 19.6219 16.3313 18.45 17.9859 20.1047L18.3703 20.4891C18.9562 21.075 19.9078 21.075 20.4938 20.4891C21.0797 19.9031 21.0797 18.9516 20.4938 18.3656L20.1094 17.9813C18.4547 16.3266 19.6266 13.5 21.9656 13.5H22.5C23.3297 13.5 24 12.8297 24 12C24 11.1703 23.3297 10.5 22.5 10.5H21.9609C19.6219 10.5 18.45 7.67344 20.1047 6.01875L20.4891 5.63437C21.075 5.04844 21.075 4.09688 20.4891 3.51094C19.9031 2.925 18.9516 2.925 18.3656 3.51094L17.9813 3.89531C16.3266 5.55 13.5 4.37813 13.5 2.03906V1.5ZM8.25 10.5C8.25 10.2045 8.3082 9.91194 8.42127 9.63896C8.53434 9.36598 8.70008 9.11794 8.90901 8.90901C9.11794 8.70008 9.36598 8.53434 9.63896 8.42127C9.91194 8.3082 10.2045 8.25 10.5 8.25C10.7955 8.25 11.0881 8.3082 11.361 8.42127C11.634 8.53434 11.8821 8.70008 12.091 8.90901C12.2999 9.11794 12.4657 9.36598 12.5787 9.63896C12.6918 9.91194 12.75 10.2045 12.75 10.5C12.75 10.7955 12.6918 11.0881 12.5787 11.361C12.4657 11.634 12.2999 11.8821 12.091 12.091C11.8821 12.2999 11.634 12.4657 11.361 12.5787C11.0881 12.6918 10.7955 12.75 10.5 12.75C10.2045 12.75 9.91194 12.6918 9.63896 12.5787C9.36598 12.4657 9.11794 12.2999 8.90901 12.091C8.70008 11.8821 8.53434 11.634 8.42127 11.361C8.3082 11.0881 8.25 10.7955 8.25 10.5ZM14.25 13.125C14.5484 13.125 14.8345 13.2435 15.0455 13.4545C15.2565 13.6655 15.375 13.9516 15.375 14.25C15.375 14.5484 15.2565 14.8345 15.0455 15.0455C14.8345 15.2565 14.5484 15.375 14.25 15.375C13.9516 15.375 13.6655 15.2565 13.4545 15.0455C13.2435 14.8345 13.125 14.5484 13.125 14.25C13.125 13.9516 13.2435 13.6655 13.4545 13.4545C13.6655 13.2435 13.9516 13.125 14.25 13.125Z"
                      fill="#EF4444"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_1655">
                      <path d="M0 0H24V24H0V0Z" fill="white"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <div className="stat-label">Files Quarantined</div>
                <div className="stat-value quarantine-value">23</div>
              </div>
              <div className="stat-icon">
                <svg
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_1663)">
                    <path
                      d="M6.75 6.75V9H14.25V6.75C14.25 4.67812 12.5719 3 10.5 3C8.42813 3 6.75 4.67812 6.75 6.75ZM3.75 9V6.75C3.75 3.02344 6.77344 0 10.5 0C14.2266 0 17.25 3.02344 17.25 6.75V9H18C19.6547 9 21 10.3453 21 12V21C21 22.6547 19.6547 24 18 24H3C1.34531 24 0 22.6547 0 21V12C0 10.3453 1.34531 9 3 9H3.75Z"
                      fill="#F97316"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_1663">
                      <path d="M0 0H21V24H0V0Z" fill="white"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <div className="stat-label">System Health</div>
                <div className="stat-value health-value">92%</div>
              </div>
              <div className="stat-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 24H0V0H24V24Z" stroke="#E5E7EB"></path>
                  <path
                    d="M10.7016 21.9891L2.23125 14.0813C2.03437 13.8984 1.84688 13.7016 1.67344 13.5H5.75156C6.81094 13.5 7.76719 12.8625 8.175 11.8828L8.66719 10.7016L10.9781 15.8344C11.1562 16.2328 11.5453 16.4906 11.9813 16.4953C12.4172 16.5 12.8156 16.2609 13.0125 15.8719L15 11.8922L15.0797 12.0516C15.525 12.9422 16.4344 13.5047 17.4281 13.5047H22.3266C22.1531 13.7063 21.9656 13.9031 21.7687 14.0859L13.2984 21.9891C12.9469 22.3172 12.4828 22.5 12 22.5C11.5172 22.5 11.0531 22.3172 10.7016 21.9891ZM23.6109 11.25H17.4234C17.2828 11.25 17.1516 11.1703 17.0859 11.0438L15.9984 8.87344C15.8062 8.49376 15.4172 8.25001 14.9906 8.25001C14.5641 8.25001 14.175 8.48907 13.9828 8.87344L12.0422 12.7547L9.65156 7.41563C9.46875 7.00782 9.05625 6.74532 8.61094 6.75469C8.16562 6.76407 7.7625 7.03126 7.58906 7.44844L6.09844 11.025C6.04219 11.1656 5.90156 11.2547 5.75156 11.2547H0.75C0.628125 11.2547 0.515625 11.2734 0.407812 11.3063C0.140625 10.5563 0 9.75938 0 8.94844V8.67657C0 5.40001 2.36719 2.60626 5.59688 2.06719C7.73438 1.71094 9.90938 2.40938 11.4375 3.93751L12 4.50001L12.5625 3.93751C14.0906 2.40938 16.2656 1.71094 18.4031 2.06719C21.6328 2.60626 24 5.40001 24 8.67657V8.94844C24 9.74063 23.8688 10.5188 23.6109 11.25Z"
                    fill="#10B981"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Detection Timeline */}
        <div className="timeline-card">
          <div className="card-header">
            <div className="card-title">Threat Detection Timeline</div>
            <div className="time-filter">
              <div className="filter-option">Daily</div>
              <div className="filter-option active">Weekly</div>
              <div className="filter-option">Monthly</div>
            </div>
          </div>
          <div className="timeline-chart">
            <div className="chart-bars">
              <div className="chart-bar" style={{ height: "110px" }}></div>
              <div className="chart-bar" style={{ height: "166px" }}></div>
              <div
                className="chart-bar danger"
                style={{ height: "294px" }}
              ></div>
              <div className="chart-bar" style={{ height: "92px" }}></div>
              <div
                className="chart-bar warning"
                style={{ height: "221px" }}
              ></div>
              <div className="chart-bar" style={{ height: "147px" }}></div>
              <div className="chart-bar" style={{ height: "129px" }}></div>
            </div>
          </div>
        </div>

        {/* Threat Types and Recent Threats */}
        <div className="threat-section">
          <div className="threat-distribution-card">
            <div className="card-title">Threat Types Distribution</div>
            <div className="distribution-list">
              <div className="distribution-item">
                <div className="item-info">
                  <div className="color-indicator danger"></div>
                  <div className="item-name">Trojans</div>
                </div>
                <div className="item-percentage">45%</div>
              </div>
              <div className="distribution-item">
                <div className="item-info">
                  <div className="color-indicator primary"></div>
                  <div className="item-name">Ransomware</div>
                </div>
                <div className="item-percentage">25%</div>
              </div>
              <div className="distribution-item">
                <div className="item-info">
                  <div className="color-indicator success"></div>
                  <div className="item-name">Spyware</div>
                </div>
                <div className="item-percentage">20%</div>
              </div>
              <div className="distribution-item">
                <div className="item-info">
                  <div className="color-indicator warning"></div>
                  <div className="item-name">Adware</div>
                </div>
                <div className="item-percentage">10%</div>
              </div>
            </div>
          </div>
          <div className="recent-threats-card">
            <div className="card-title">Recent Threats</div>
            <div className="threats-list">
              <div className="threat-item high-risk">
                <div className="threat-info">
                  <div className="threat-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_1724)">
                        <path
                          d="M9 1C9 0.446875 8.55313 0 8 0C7.44688 0 7 0.446875 7 1V1.35938C7 2.91875 5.11562 3.7 4.0125 2.59687L3.75625 2.34375C3.36562 1.95312 2.73438 1.95312 2.34375 2.34375C1.95312 2.73438 1.95312 3.36875 2.34375 3.75938L2.6 4.01562C3.7 5.11562 2.91875 7 1.35938 7H1C0.446875 7 0 7.44688 0 8C0 8.55313 0.446875 9 1 9H1.35938C2.91875 9 3.7 10.8844 2.59687 11.9875L2.34375 12.2437C1.95312 12.6344 1.95312 13.2688 2.34375 13.6594C2.73438 14.05 3.36875 14.05 3.75938 13.6594L4.01562 13.4031C5.11875 12.3 7.00313 13.0813 7.00313 14.6406V15C7.00313 15.5531 7.45 16 8.00313 16C8.55625 16 9.00313 15.5531 9.00313 15V14.6406C9.00313 13.0813 10.8875 12.3 11.9906 13.4031L12.2469 13.6594C12.6375 14.05 13.2719 14.05 13.6625 13.6594C14.0531 13.2688 14.0531 12.6344 13.6625 12.2437L13.4062 11.9875C12.3031 10.8844 13.0844 9 14.6438 9H15C15.5531 9 16 8.55313 16 8C16 7.44688 15.5531 7 15 7H14.6406C13.0813 7 12.3 5.11562 13.4031 4.0125L13.6594 3.75625C14.05 3.36562 14.05 2.73125 13.6594 2.34063C13.2688 1.95 12.6344 1.95 12.2437 2.34063L11.9875 2.59687C10.8844 3.7 9 2.91875 9 1.35938V1ZM5.5 7C5.5 6.80302 5.5388 6.60796 5.61418 6.42597C5.68956 6.24399 5.80005 6.07863 5.93934 5.93934C6.07863 5.80005 6.24399 5.68956 6.42597 5.61418C6.60796 5.5388 6.80302 5.5 7 5.5C7.19698 5.5 7.39204 5.5388 7.57403 5.61418C7.75601 5.68956 7.92137 5.80005 8.06066 5.93934C8.19995 6.07863 8.31044 6.24399 8.38582 6.42597C8.4612 6.60796 8.5 6.80302 8.5 7C8.5 7.19698 8.4612 7.39204 8.38582 7.57403C8.31044 7.75601 8.19995 7.92137 8.06066 8.06066C7.92137 8.19995 7.75601 8.31044 7.57403 8.38582C7.39204 8.4612 7.19698 8.5 7 8.5C6.80302 8.5 6.60796 8.4612 6.42597 8.38582C6.24399 8.31044 6.07863 8.19995 5.93934 8.06066C5.80005 7.92137 5.68956 7.75601 5.61418 7.57403C5.5388 7.39204 5.5 7.19698 5.5 7ZM9.5 8.75C9.69891 8.75 9.88968 8.82902 10.0303 8.96967C10.171 9.11032 10.25 9.30109 10.25 9.5C10.25 9.69891 10.171 9.88968 10.0303 10.0303C9.88968 10.171 9.69891 10.25 9.5 10.25C9.30109 10.25 9.11032 10.171 8.96967 10.0303C8.82902 9.88968 8.75 9.69891 8.75 9.5C8.75 9.30109 8.82902 9.11032 8.96967 8.96967C9.11032 8.82902 9.30109 8.75 9.5 8.75Z"
                          fill="#EF4444"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_1724">
                          <path d="M0 0H16V16H0V0Z" fill="white"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="threat-details">
                    <div className="threat-name">Trojan.Win32.Generic</div>
                    <div className="threat-time">Detected 5 minutes ago</div>
                  </div>
                </div>
                <div className="threat-risk">High Risk</div>
              </div>
              <div className="threat-item medium-risk">
                <div className="threat-info">
                  <div className="threat-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_1734)">
                        <path
                          d="M8 0C9.65625 0 11 1.34375 11 3V3.1125C11 3.60312 10.6031 4 10.1125 4H5.8875C5.39687 4 5 3.60312 5 3.1125V3C5 1.34375 6.34375 0 8 0ZM1.29375 3.29375C1.68438 2.90313 2.31875 2.90313 2.70937 3.29375L4.70937 5.29375C4.73125 5.31562 4.75 5.3375 4.76875 5.35938C5.2125 5.13125 5.71875 5.00313 6.25313 5.00313H9.75C10.2844 5.00313 10.7875 5.13125 11.2344 5.35938C11.2531 5.3375 11.2719 5.31562 11.2937 5.29375L13.2937 3.29375C13.6844 2.90313 14.3188 2.90313 14.7094 3.29375C15.1 3.68438 15.1 4.31875 14.7094 4.70937L12.7094 6.70937C12.6875 6.73125 12.6656 6.75 12.6438 6.76875C12.8375 7.14375 12.9594 7.55938 12.9906 8.00313H15C15.5531 8.00313 16 8.45 16 9.00313C16 9.55625 15.5531 10.0031 15 10.0031H13C13 10.7719 12.8281 11.4969 12.5188 12.1469C12.5875 12.1875 12.65 12.2375 12.7063 12.2969L14.7063 14.2969C15.0969 14.6875 15.0969 15.3219 14.7063 15.7125C14.3156 16.1031 13.6812 16.1031 13.2906 15.7125L11.3188 13.7406C10.5531 14.4219 9.575 14.8719 8.49687 14.9781V7.5C8.49687 7.225 8.27187 7 7.99687 7C7.72187 7 7.49687 7.225 7.49687 7.5V14.975C6.41875 14.8688 5.44063 14.4187 4.675 13.7375L2.70625 15.7063C2.31562 16.0969 1.68125 16.0969 1.29062 15.7063C0.9 15.3156 0.9 14.6812 1.29062 14.2906L3.29063 12.2906C3.35 12.2312 3.4125 12.1844 3.47813 12.1406C3.17188 11.4937 3 10.7688 3 10H1C0.446875 10 0 9.55313 0 9C0 8.44687 0.446875 8 1 8H3.00938C3.04375 7.55937 3.16563 7.14062 3.35625 6.76562C3.33438 6.74687 3.3125 6.72813 3.29063 6.70625L1.29062 4.70625C0.9 4.31563 0.9 3.68125 1.29062 3.29063L1.29375 3.29375Z"
                          fill="#F97316"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_1734">
                          <path d="M0 0H16V16H0V0Z" fill="white"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="threat-details">
                    <div className="threat-name">Spyware.Logger</div>
                    <div className="threat-time">Detected 23 minutes ago</div>
                  </div>
                </div>
                <div className="threat-risk">Medium Risk</div>
              </div>
              <div className="threat-item low-risk">
                <div className="threat-info">
                  <div className="threat-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_1744)">
                        <path
                          d="M8.00001 1C8.44376 1 8.85313 1.23437 9.07813 1.61875L15.8281 13.1187C16.0563 13.5062 16.0563 13.9844 15.8344 14.3719C15.6125 14.7594 15.1969 15 14.75 15H1.25001C0.803131 15 0.387506 14.7594 0.165631 14.3719C-0.0562438 13.9844 -0.0531188 13.5031 0.171881 13.1187L6.92188 1.61875C7.14688 1.23437 7.55626 1 8.00001 1ZM8.00001 5C7.58438 5 7.25001 5.33437 7.25001 5.75V9.25C7.25001 9.66562 7.58438 10 8.00001 10C8.41563 10 8.75001 9.66562 8.75001 9.25V5.75C8.75001 5.33437 8.41563 5 8.00001 5ZM9.00001 12C9.00001 11.7348 8.89465 11.4804 8.70711 11.2929C8.51958 11.1054 8.26522 11 8.00001 11C7.73479 11 7.48044 11.1054 7.2929 11.2929C7.10536 11.4804 7.00001 11.7348 7.00001 12C7.00001 12.2652 7.10536 12.5196 7.2929 12.7071C7.48044 12.8946 7.73479 13 8.00001 13C8.26522 13 8.51958 12.8946 8.70711 12.7071C8.89465 12.5196 9.00001 12.2652 9.00001 12Z"
                          fill="#F59E0B"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_1744">
                          <path d="M0 0H16V16H0V0Z" fill="white"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="threat-details">
                    <div className="threat-name">Adware.Generic</div>
                    <div className="threat-time">Detected 1 hour ago</div>
                  </div>
                </div>
                <div className="threat-risk">Low Risk</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDetection;
