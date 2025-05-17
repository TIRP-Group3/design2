import React from "react";

function AdminLoginSidebar() {
  return (
    <div className="admin-sidebar-container">
      <div className="admin-sidebar-overlay"></div>
      <div className="admin-sidebar-content">
        <div className="admin-sidebar-title">Malware Detection Platform</div>
        <div className="admin-sidebar-description">
          Advanced security solutions powered by machine learning to protect
          your systems.
        </div>
        <div className="admin-sidebar-features">
          <div className="admin-feature-item">
            <div className="admin-feature-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13_17)">
                  <path
                    d="M8.00001 0C8.14376 0 8.28751 0.03125 8.41876 0.090625L14.3031 2.5875C14.9906 2.87813 15.5031 3.55625 15.5 4.375C15.4844 7.475 14.2094 13.1469 8.82501 15.725C8.30314 15.975 7.69689 15.975 7.17501 15.725C1.79064 13.1469 0.515639 7.475 0.500014 4.375C0.496889 3.55625 1.00939 2.87813 1.69689 2.5875L7.58439 0.090625C7.71251 0.03125 7.85626 0 8.00001 0ZM8.00001 2.0875V13.9C12.3125 11.8125 13.4719 7.19062 13.5 4.41875L8.00001 2.0875Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_13_17">
                    <path d="M0 0H16V16H0V0Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="admin-feature-text">Real-time threat detection</div>
          </div>
          <div className="admin-feature-item">
            <div className="admin-feature-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB"></path>
                <path
                  d="M2 2C2 1.44687 1.55313 1 1 1C0.446875 1 0 1.44687 0 2V12.5C0 13.8813 1.11875 15 2.5 15H15C15.5531 15 16 14.5531 16 14C16 13.4469 15.5531 13 15 13H2.5C2.225 13 2 12.775 2 12.5V2ZM14.7063 4.70625C15.0969 4.31563 15.0969 3.68125 14.7063 3.29063C14.3156 2.9 13.6812 2.9 13.2906 3.29063L10 6.58437L8.20625 4.79063C7.81563 4.4 7.18125 4.4 6.79063 4.79063L3.29063 8.29062C2.9 8.68125 2.9 9.31563 3.29063 9.70625C3.68125 10.0969 4.31563 10.0969 4.70625 9.70625L7.5 6.91563L9.29375 8.70938C9.68437 9.1 10.3188 9.1 10.7094 8.70938L14.7094 4.70937L14.7063 4.70625Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="admin-feature-text">Advanced analytics</div>
          </div>
          <div className="admin-feature-item">
            <div className="admin-feature-icon">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13_27)">
                  <path
                    d="M4.5 4.5V6H9.5V4.5C9.5 3.11875 8.38125 2 7 2C5.61875 2 4.5 3.11875 4.5 4.5ZM2.5 6V4.5C2.5 2.01562 4.51562 0 7 0C9.48438 0 11.5 2.01562 11.5 4.5V6H12C13.1031 6 14 6.89687 14 8V14C14 15.1031 13.1031 16 12 16H2C0.896875 16 0 15.1031 0 14V8C0 6.89687 0.896875 6 2 6H2.5Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_13_27">
                    <path d="M0 0H14V16H0V0Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="admin-feature-text">Enterprise-grade security</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginSidebar;
