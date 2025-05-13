import React from "react";
import { useNavigate } from "react-router-dom";

function AdminPrediction() {
  const navigate = useNavigate();

  return (
    <div className="prediction-container">
      <header className="prediction-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-container">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_22_589)">
                  <path
                    d="M12 0C12.2156 0 12.4312 0.046875 12.6281 0.135938L21.4547 3.88125C22.4859 4.31719 23.2547 5.33438 23.25 6.5625C23.2266 11.2125 21.3141 19.7203 13.2375 23.5875C12.4547 23.9625 11.5453 23.9625 10.7625 23.5875C2.68593 19.7203 0.773428 11.2125 0.749991 6.5625C0.745303 5.33438 1.51405 4.31719 2.5453 3.88125L11.3766 0.135938C11.5687 0.046875 11.7844 0 12 0ZM12 3.13125V20.85C18.4687 17.7188 20.2078 10.7859 20.25 6.62813L12 3.13125Z"
                    fill="#2563EB"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_22_589">
                    <path d="M0 0H24V24H0V0Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="platform-name">MalwareGuard AI</div>
            <div className="nav-container">
              <div className="nav-items">
                <div
                  className="nav-item"
                  onClick={() => navigate("/admin-dashboard")}
                >
                  Dashboard
                </div>
                <div
                  className="nav-item"
                  onClick={() => navigate("/admin-detection")}
                >
                  Detection
                </div>
                <div className="nav-item active">Predictions</div>
                <div
                  className="nav-item"
                  onClick={() => navigate("/upload-dataset")}
                >
                  Upload Dataset
                </div>
                <div className="nav-item">Settings</div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="notification-icon">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_22_599)">
                  <path
                    d="M9.24998 0C8.55857 0 7.99998 0.558594 7.99998 1.25V1.94922C5.16795 2.39844 2.99998 4.85156 2.99998 7.8125V9.11719C2.99998 10.8906 2.39451 12.6133 1.28904 13.9961L0.707012 14.7266C0.48045 15.0078 0.437481 15.3945 0.593731 15.7188C0.749981 16.043 1.07811 16.25 1.43748 16.25H17.0625C17.4219 16.25 17.75 16.043 17.9062 15.7188C18.0625 15.3945 18.0195 15.0078 17.7929 14.7266L17.2109 14C16.1054 12.6133 15.5 10.8906 15.5 9.11719V7.8125C15.5 4.85156 13.332 2.39844 10.5 1.94922V1.25C10.5 0.558594 9.94139 0 9.24998 0ZM9.24998 3.75H9.56248C11.8047 3.75 13.625 5.57031 13.625 7.8125V9.11719C13.625 10.9883 14.1679 12.8125 15.1758 14.375H3.3242C4.33201 12.8125 4.87498 10.9883 4.87498 9.11719V7.8125C4.87498 5.57031 6.69529 3.75 8.93748 3.75H9.24998ZM11.75 17.5H9.24998H6.74998C6.74998 18.1641 7.0117 18.8008 7.48045 19.2695C7.9492 19.7383 8.58592 20 9.24998 20C9.91404 20 10.5508 19.7383 11.0195 19.2695C11.4883 18.8008 11.75 18.1641 11.75 17.5Z"
                    fill="#4B5563"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_22_599">
                    <path d="M0.5 0H18V20H0.5V0Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="user-avatar">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a45223b3c7690bcfdb08186f66102601b7ed2b81"
                alt="User avatar"
                className="avatar-image"
              />
            </div>
            <div className="mobile-menu">
              <i className="ti ti-menu-2"></i>
            </div>
          </div>
        </div>
      </header>

      <main className="prediction-main">
        <div className="page-header">
          <h1 className="page-title">Create Malware Prediction</h1>
          <p className="page-description">
            Generate AI-powered predictions for potential future malware threats
          </p>
        </div>

        <div className="prediction-form-card">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Analysis Type</label>
              <div className="select-wrapper">
                <select className="form-select">
                  <option>Behavioral Analysis</option>
                </select>
                <div className="select-arrow">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.1065 11.1757C8.32855 10.962 8.62634 10.8453 8.93442 10.8511C9.2425 10.8569 9.53567 10.9848 9.7495 11.2067L15.5 17.3106L21.2505 11.2067C21.355 11.0914 21.4816 10.9983 21.6228 10.9329C21.7639 10.8675 21.9168 10.8311 22.0723 10.8259C22.2278 10.8206 22.3827 10.8466 22.528 10.9023C22.6732 10.9581 22.8058 11.0424 22.9179 11.1503C23.03 11.2582 23.1192 11.3876 23.1804 11.5306C23.2416 11.6736 23.2734 11.8275 23.274 11.9831C23.2747 12.1387 23.244 12.2928 23.184 12.4363C23.124 12.5798 23.0357 12.7099 22.9245 12.8187L16.337 19.7937C16.2286 19.9062 16.0985 19.9957 15.9547 20.0568C15.8109 20.1179 15.6563 20.1494 15.5 20.1494C15.3437 20.1494 15.1891 20.1179 15.0453 20.0568C14.9015 19.9957 14.7714 19.9062 14.663 19.7937L8.0755 12.8187C7.86187 12.5966 7.74513 12.2988 7.75094 11.9907C7.75675 11.6827 7.88464 11.3895 8.1065 11.1757Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Time Frame</label>
              <div className="select-wrapper">
                <select className="form-select">
                  <option>Next 30 Days</option>
                </select>
                <div className="select-arrow">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.1065 11.1757C8.32855 10.962 8.62634 10.8453 8.93442 10.8511C9.2425 10.8569 9.53567 10.9848 9.7495 11.2067L15.5 17.3106L21.2505 11.2067C21.355 11.0914 21.4816 10.9983 21.6228 10.9329C21.7639 10.8675 21.9168 10.8311 22.0723 10.8259C22.2278 10.8206 22.3827 10.8466 22.528 10.9023C22.6732 10.9581 22.8058 11.0424 22.9179 11.1503C23.03 11.2582 23.1192 11.3876 23.1804 11.5306C23.2416 11.6736 23.2734 11.8275 23.274 11.9831C23.2747 12.1387 23.244 12.2928 23.184 12.4363C23.124 12.5798 23.0357 12.7099 22.9245 12.8187L16.337 19.7937C16.2286 19.9062 16.0985 19.9957 15.9547 20.0568C15.8109 20.1179 15.6563 20.1494 15.5 20.1494C15.3437 20.1494 15.1891 20.1179 15.0453 20.0568C14.9015 19.9957 14.7714 19.9062 14.663 19.7937L8.0755 12.8187C7.86187 12.5966 7.74513 12.2988 7.75094 11.9907C7.75675 11.6827 7.88464 11.3895 8.1065 11.1757Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Target Systems</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
                  <span className="checkbox-text">Windows</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
                  <span className="checkbox-text">macOS</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
                  <span className="checkbox-text">Linux</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
                  <span className="checkbox-text">Mobile Devices</span>
                </label>
              </div>
            </div>
          </div>

          <div className="advanced-options">
            <h2 className="section-title">Advanced Options</h2>
            <div className="options-row">
              <div className="option-card">
                <div className="option-header">
                  <span className="option-label">Machine Learning Model</span>
                  <div className="info-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_22_647)">
                        <path
                          d="M8.32812 16C10.4499 16 12.4847 15.1571 13.985 13.6569C15.4853 12.1566 16.3281 10.1217 16.3281 8C16.3281 5.87827 15.4853 3.84344 13.985 2.34315C12.4847 0.842855 10.4499 0 8.32812 0C6.20639 0 4.17156 0.842855 2.67127 2.34315C1.17098 3.84344 0.328125 5.87827 0.328125 8C0.328125 10.1217 1.17098 12.1566 2.67127 13.6569C4.17156 15.1571 6.20639 16 8.32812 16ZM7.07812 10.5H7.82812V8.5H7.07812C6.6625 8.5 6.32812 8.16562 6.32812 7.75C6.32812 7.33437 6.6625 7 7.07812 7H8.57812C8.99375 7 9.32812 7.33437 9.32812 7.75V10.5H9.57812C9.99375 10.5 10.3281 10.8344 10.3281 11.25C10.3281 11.6656 9.99375 12 9.57812 12H7.07812C6.6625 12 6.32812 11.6656 6.32812 11.25C6.32812 10.8344 6.6625 10.5 7.07812 10.5ZM8.32812 4C8.59334 4 8.8477 4.10536 9.03523 4.29289C9.22277 4.48043 9.32812 4.73478 9.32812 5C9.32812 5.26522 9.22277 5.51957 9.03523 5.70711C8.8477 5.89464 8.59334 6 8.32812 6C8.06291 6 7.80855 5.89464 7.62102 5.70711C7.43348 5.51957 7.32812 5.26522 7.32812 5C7.32812 4.73478 7.43348 4.48043 7.62102 4.29289C7.80855 4.10536 8.06291 4 8.32812 4Z"
                          fill="#9CA3AF"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_22_647">
                          <path
                            d="M0.328125 0H16.3281V16H0.328125V0Z"
                            fill="white"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="select-wrapper">
                  <select className="option-select">
                    <option>Standard</option>
                  </select>
                  <div className="select-arrow">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.34263 8.29127C6.50737 8.13277 6.72831 8.04616 6.95689 8.05047C7.18546 8.05478 7.40297 8.14967 7.56163 8.31427L11.8281 12.843L16.0946 8.31427C16.1722 8.22878 16.2661 8.15972 16.3708 8.11119C16.4756 8.06265 16.589 8.03564 16.7043 8.03174C16.8197 8.02784 16.9347 8.04714 17.0424 8.08849C17.1502 8.12984 17.2486 8.19241 17.3317 8.27247C17.4149 8.35254 17.4811 8.44848 17.5265 8.55461C17.5719 8.66075 17.5955 8.77491 17.596 8.89034C17.5964 9.00577 17.5737 9.12011 17.5291 9.2266C17.4846 9.33309 17.4191 9.42955 17.3366 9.51027L12.4491 14.6853C12.3687 14.7687 12.2722 14.8351 12.1655 14.8805C12.0588 14.9258 11.9441 14.9492 11.8281 14.9492C11.7122 14.9492 11.5974 14.9258 11.4907 14.8805C11.384 14.8351 11.2876 14.7687 11.2071 14.6853L6.31963 9.51027C6.16112 9.34553 6.07451 9.12459 6.07882 8.89601C6.08313 8.66744 6.17802 8.44992 6.34263 8.29127Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="option-card">
                <div className="option-header">
                  <span className="option-label">Confidence Threshold</span>
                  <div className="info-icon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_22_657)">
                        <path
                          d="M8.65625 16C10.778 16 12.8128 15.1571 14.3131 13.6569C15.8134 12.1566 16.6562 10.1217 16.6562 8C16.6562 5.87827 15.8134 3.84344 14.3131 2.34315C12.8128 0.842855 10.778 0 8.65625 0C6.53452 0 4.49969 0.842855 2.9994 2.34315C1.4991 3.84344 0.65625 5.87827 0.65625 8C0.65625 10.1217 1.4991 12.1566 2.9994 13.6569C4.49969 15.1571 6.53452 16 8.65625 16ZM7.40625 10.5H8.15625V8.5H7.40625C6.99062 8.5 6.65625 8.16562 6.65625 7.75C6.65625 7.33437 6.99062 7 7.40625 7H8.90625C9.32187 7 9.65625 7.33437 9.65625 7.75V10.5H9.90625C10.3219 10.5 10.6562 10.8344 10.6562 11.25C10.6562 11.6656 10.3219 12 9.90625 12H7.40625C6.99062 12 6.65625 11.6656 6.65625 11.25C6.65625 10.8344 6.99062 10.5 7.40625 10.5ZM8.65625 4C8.92147 4 9.17582 4.10536 9.36336 4.29289C9.55089 4.48043 9.65625 4.73478 9.65625 5C9.65625 5.26522 9.55089 5.51957 9.36336 5.70711C9.17582 5.89464 8.92147 6 8.65625 6C8.39103 6 8.13668 5.89464 7.94914 5.70711C7.76161 5.51957 7.65625 5.26522 7.65625 5C7.65625 4.73478 7.76161 4.48043 7.94914 4.29289C8.13668 4.10536 8.39103 4 8.65625 4Z"
                          fill="#9CA3AF"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_22_657">
                          <path
                            d="M0.65625 0H16.6562V16H0.65625V0Z"
                            fill="white"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="slider-container">
                  <div className="slider-track">
                    <div className="slider-fill">
                      <div className="slider-handle">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.32812 16.5C13.4702 16.5 16.8281 13.1421 16.8281 9.00001C16.8281 4.85785 13.4702 1.5 9.32812 1.5C5.18601 1.5 1.82812 4.85785 1.82812 9.00001C1.82812 13.1421 5.18601 16.5 9.32812 16.5Z"
                            fill="#0075FF"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="option-card">
                <div className="option-header">
                  <span className="option-label">Include Historical Data</span>
                  <div className="info-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_22_668)">
                        <path
                          d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM6.75 10.5H7.5V8.5H6.75C6.33437 8.5 6 8.16562 6 7.75C6 7.33437 6.33437 7 6.75 7H8.25C8.66562 7 9 7.33437 9 7.75V10.5H9.25C9.66562 10.5 10 10.8344 10 11.25C10 11.6656 9.66562 12 9.25 12H6.75C6.33437 12 6 11.6656 6 11.25C6 10.8344 6.33437 10.5 6.75 10.5ZM8 4C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4Z"
                          fill="#9CA3AF"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_22_668">
                          <path d="M0 0H16V16H0V0Z" fill="white"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <label className="checkbox-label">
                  <div className="checkbox-checked">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_22_673)">
                        <path
                          d="M1.67603 7.68124L5.0914 11.0283L12.4344 2.66064"
                          stroke="white"
                          strokeWidth="2.39076"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_22_673">
                          <rect
                            width="14"
                            height="12"
                            fill="white"
                            transform="translate(0.15625 0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="option-checkbox-text">
                    Use past 12 months data
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button className="btn-primary">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 16H0V0H18V16Z" stroke="#E5E7EB"></path>
                <path
                  d="M7.33437 1.33438L6.15625 1.775C6.0625 1.80937 6 1.9 6 2C6 2.1 6.0625 2.19062 6.15625 2.225L7.33437 2.66563L7.775 3.84375C7.80938 3.9375 7.9 4 8 4C8.1 4 8.19063 3.9375 8.225 3.84375L8.66562 2.66563L9.84375 2.225C9.9375 2.19062 10 2.1 10 2C10 1.9 9.9375 1.80937 9.84375 1.775L8.66562 1.33438L8.225 0.15625C8.19063 0.0625 8.1 0 8 0C7.9 0 7.80938 0.0625 7.775 0.15625L7.33437 1.33438ZM1.44062 12.3562C0.85625 12.9406 0.85625 13.8906 1.44062 14.4781L2.52187 15.5594C3.10625 16.1437 4.05625 16.1437 4.64375 15.5594L16.5594 3.64062C17.1438 3.05625 17.1438 2.10625 16.5594 1.51875L15.4781 0.440625C14.8937 -0.14375 13.9437 -0.14375 13.3562 0.440625L1.44062 12.3562ZM15.1438 2.58125L11.8625 5.8625L11.1344 5.13438L14.4156 1.85312L15.1438 2.58125ZM0.234375 3.6625C0.09375 3.71562 0 3.85 0 4C0 4.15 0.09375 4.28438 0.234375 4.3375L2 5L2.6625 6.76562C2.71562 6.90625 2.85 7 3 7C3.15 7 3.28438 6.90625 3.3375 6.76562L4 5L5.76562 4.3375C5.90625 4.28438 6 4.15 6 4C6 3.85 5.90625 3.71562 5.76562 3.6625L4 3L3.3375 1.23438C3.28438 1.09375 3.15 1 3 1C2.85 1 2.71562 1.09375 2.6625 1.23438L2 3L0.234375 3.6625ZM11.2344 11.6625C11.0938 11.7156 11 11.85 11 12C11 12.15 11.0938 12.2844 11.2344 12.3375L13 13L13.6625 14.7656C13.7156 14.9062 13.85 15 14 15C14.15 15 14.2844 14.9062 14.3375 14.7656L15 13L16.7656 12.3375C16.9062 12.2844 17 12.15 17 12C17 11.85 16.9062 11.7156 16.7656 11.6625L15 11L14.3375 9.23438C14.2844 9.09375 14.15 9 14 9C13.85 9 13.7156 9.09375 13.6625 9.23438L13 11L11.2344 11.6625Z"
                  fill="white"
                ></path>
              </svg>
              <span>Generate Prediction</span>
            </button>
            <button className="btn-secondary">Save as Draft</button>
          </div>
        </div>

        <div className="recent-predictions">
          <h2 className="section-title">Recent Predictions</h2>
          <div className="predictions-grid">
            <div className="prediction-card">
              <div className="prediction-card-header">
                <div className="prediction-time">24 hours ago</div>
                <div className="status-badge completed">Completed</div>
              </div>
              <div className="prediction-title">Ransomware Trend Analysis</div>
              <div className="prediction-description">
                30-day prediction for Windows systems
              </div>
              <div className="prediction-footer">
                <div className="view-link">View Results</div>
                <div className="arrow-icon">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_22_700)">
                      <path
                        d="M14.0344 8.70615C14.425 8.31553 14.425 7.68115 14.0344 7.29053L9.03438 2.29053C8.64375 1.8999 8.00938 1.8999 7.61875 2.29053C7.22813 2.68115 7.22813 3.31553 7.61875 3.70615L10.9156 6.9999H1.32812C0.775 6.9999 0.328125 7.44678 0.328125 7.9999C0.328125 8.55303 0.775 8.9999 1.32812 8.9999H10.9125L7.62187 12.2937C7.23125 12.6843 7.23125 13.3187 7.62187 13.7093C8.0125 14.0999 8.64688 14.0999 9.0375 13.7093L14.0375 8.70928L14.0344 8.70615Z"
                        fill="#9CA3AF"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_22_700">
                        <path
                          d="M0.328125 0H14.3281V16H0.328125V0Z"
                          fill="white"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="prediction-card">
              <div className="prediction-card-header">
                <div className="prediction-time">2 days ago</div>
                <div className="status-badge processing">Processing</div>
              </div>
              <div className="prediction-title">Zero-day Threat Analysis</div>
              <div className="prediction-description">
                90-day prediction for all systems
              </div>
              <div className="prediction-footer">
                <div className="view-link">View Progress</div>
                <div className="arrow-icon">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_22_714)">
                      <path
                        d="M14.3625 8.70615C14.7531 8.31553 14.7531 7.68115 14.3625 7.29053L9.3625 2.29053C8.97188 1.8999 8.3375 1.8999 7.94688 2.29053C7.55625 2.68115 7.55625 3.31553 7.94688 3.70615L11.2437 6.9999H1.65625C1.10312 6.9999 0.65625 7.44678 0.65625 7.9999C0.65625 8.55303 1.10312 8.9999 1.65625 8.9999H11.2406L7.95 12.2937C7.55937 12.6843 7.55937 13.3187 7.95 13.7093C8.34062 14.0999 8.975 14.0999 9.36563 13.7093L14.3656 8.70928L14.3625 8.70615Z"
                        fill="#9CA3AF"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_22_714">
                        <path
                          d="M0.65625 0H14.6562V16H0.65625V0Z"
                          fill="white"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="prediction-card">
              <div className="prediction-card-header">
                <div className="prediction-time">5 days ago</div>
                <div className="status-badge completed">Completed</div>
              </div>
              <div className="prediction-title">Mobile Malware Forecast</div>
              <div className="prediction-description">
                60-day prediction for mobile devices
              </div>
              <div className="prediction-footer">
                <div className="view-link">View Results</div>
                <div className="arrow-icon">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 16H0V0H14V16Z" stroke="#E5E7EB"></path>
                    <path
                      d="M13.7063 8.70615C14.0969 8.31553 14.0969 7.68115 13.7063 7.29053L8.70625 2.29053C8.31563 1.8999 7.68125 1.8999 7.29063 2.29053C6.9 2.68115 6.9 3.31553 7.29063 3.70615L10.5875 6.9999H1C0.446875 6.9999 0 7.44678 0 7.9999C0 8.55303 0.446875 8.9999 1 8.9999H10.5844L7.29375 12.2937C6.90312 12.6843 6.90312 13.3187 7.29375 13.7093C7.68437 14.0999 8.31875 14.0999 8.70938 13.7093L13.7094 8.70928L13.7063 8.70615Z"
                      fill="#9CA3AF"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminPrediction;
