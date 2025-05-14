import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminSettings.css";

function AdminSettings() {
  const navigate = useNavigate();
  return (
    <div className="settings-container">
      <div className="settings-header">
        <div className="settings-header-content">
          <div className="settings-title">Settings</div>
        </div>
      </div>
      <div className="settings-content">
        <div className="settings-sidebar">
          <div className="settings-sidebar-menu">
            <div className="sidebar-item active">
              <div>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13_427)">
                    <path
                      d="M9.5 4C9.5 3.33696 9.23661 2.70107 8.76777 2.23223C8.29893 1.76339 7.66304 1.5 7 1.5C6.33696 1.5 5.70107 1.76339 5.23223 2.23223C4.76339 2.70107 4.5 3.33696 4.5 4C4.5 4.66304 4.76339 5.29893 5.23223 5.76777C5.70107 6.23661 6.33696 6.5 7 6.5C7.66304 6.5 8.29893 6.23661 8.76777 5.76777C9.23661 5.29893 9.5 4.66304 9.5 4ZM3 4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0C8.06087 0 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4C11 5.06087 10.5786 6.07828 9.82843 6.82843C9.07828 7.57857 8.06087 8 7 8C5.93913 8 4.92172 7.57857 4.17157 6.82843C3.42143 6.07828 3 5.06087 3 4ZM1.54062 14.5H12.4594C12.1813 12.5219 10.4813 11 8.42813 11H5.57188C3.51875 11 1.81875 12.5219 1.54062 14.5ZM0 15.0719C0 11.9937 2.49375 9.5 5.57188 9.5H8.42813C11.5063 9.5 14 11.9937 14 15.0719C14 15.5844 13.5844 16 13.0719 16H0.928125C0.415625 16 0 15.5844 0 15.0719Z"
                      fill="#2563EB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_427">
                      <path d="M0 0H14V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="sidebar-item-text active-text">Account</div>
            </div>
            <div className="sidebar-item" onClick={() => navigate('/admin-notifications')} style={{cursor: 'pointer'}}>
              <div>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13_438)">
                    <path
                      d="M7.00003 0C6.44691 0 6.00003 0.446875 6.00003 1V1.55938C3.73441 1.91875 2.00003 3.88125 2.00003 6.25V7.29375C2.00003 8.7125 1.51566 10.0906 0.631284 11.1969L0.165659 11.7812C-0.0155914 12.0063 -0.0499664 12.3156 0.0750336 12.575C0.200034 12.8344 0.462534 13 0.750034 13H13.25C13.5375 13 13.8 12.8344 13.925 12.575C14.05 12.3156 14.0157 12.0063 13.8344 11.7812L13.3688 11.2C12.4844 10.0906 12 8.7125 12 7.29375V6.25C12 3.88125 10.2657 1.91875 8.00003 1.55938V1C8.00003 0.446875 7.55316 0 7.00003 0ZM7.00003 3H7.25003C9.04378 3 10.5 4.45625 10.5 6.25V7.29375C10.5 8.79062 10.9344 10.25 11.7407 11.5H2.25941C3.06566 10.25 3.50003 8.79062 3.50003 7.29375V6.25C3.50003 4.45625 4.95628 3 6.75003 3H7.00003ZM9.00003 14H7.00003H5.00003C5.00003 14.5312 5.20941 15.0406 5.58441 15.4156C5.95941 15.7906 6.46878 16 7.00003 16C7.53128 16 8.04066 15.7906 8.41566 15.4156C8.79066 15.0406 9.00003 14.5312 9.00003 14Z"
                      fill="#4B5563"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_438">
                      <path d="M0 0H14V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="sidebar-item-text">Notifications</div>
            </div>
            <div className="sidebar-item">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13_443)">
                    <path
                      d="M16 8C16 8.02812 16 8.05625 16 8.08438C15.9875 9.225 14.95 10 13.8094 10H10.75C9.92188 10 9.25 10.6719 9.25 11.5C9.25 11.6062 9.2625 11.7094 9.28125 11.8094C9.34688 12.1281 9.48438 12.4344 9.61875 12.7437C9.80937 13.175 9.99687 13.6031 9.99687 14.0562C9.99687 15.05 9.32187 15.9531 8.32812 15.9937C8.21875 15.9969 8.10938 16 7.99687 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM4 9C4 8.73478 3.89464 8.48043 3.70711 8.29289C3.51957 8.10536 3.26522 8 3 8C2.73478 8 2.48043 8.10536 2.29289 8.29289C2.10536 8.48043 2 8.73478 2 9C2 9.26522 2.10536 9.51957 2.29289 9.70711C2.48043 9.89464 2.73478 10 3 10C3.26522 10 3.51957 9.89464 3.70711 9.70711C3.89464 9.51957 4 9.26522 4 9ZM4 6C4.26522 6 4.51957 5.89464 4.70711 5.70711C4.89464 5.51957 5 5.26522 5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6ZM9 3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3C7 3.26522 7.10536 3.51957 7.29289 3.70711C7.48043 3.89464 7.73478 4 8 4C8.26522 4 8.51957 3.89464 8.70711 3.70711C8.89464 3.51957 9 3.26522 9 3ZM12 6C12.2652 6 12.5196 5.89464 12.7071 5.70711C12.8946 5.51957 13 5.26522 13 5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5C11 5.26522 11.1054 5.51957 11.2929 5.70711C11.4804 5.89464 11.7348 6 12 6Z"
                      fill="#4B5563"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_443">
                      <path d="M0 0H16V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="sidebar-item-text">Appearance</div>
            </div>
            <div className="sidebar-item">
              <div>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 16H0V0H18V16Z" stroke="#E5E7EB" />
                  <path
                    d="M2 1C0.896875 1 0 1.89688 0 3V4H18V3C18 1.89688 17.1031 1 16 1H2ZM18 7H0V13C0 14.1031 0.896875 15 2 15H16C17.1031 15 18 14.1031 18 13V7ZM3.5 11H5.5C5.775 11 6 11.225 6 11.5C6 11.775 5.775 12 5.5 12H3.5C3.225 12 3 11.775 3 11.5C3 11.225 3.225 11 3.5 11ZM7 11.5C7 11.225 7.225 11 7.5 11H11.5C11.775 11 12 11.225 12 11.5C12 11.775 11.775 12 11.5 12H7.5C7.225 12 7 11.775 7 11.5Z"
                    fill="#4B5563"
                  />
                </svg>
              </div>
              <div className="sidebar-item-text">Dashboard</div>
            </div>
            <div className="sidebar-item">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13_453)">
                    <path
                      d="M11 8C11 8.69375 10.9625 9.3625 10.8969 10H5.10313C5.03438 9.3625 5 8.69375 5 8C5 7.30625 5.0375 6.6375 5.10313 6H10.8969C10.9656 6.6375 11 7.30625 11 8ZM11.9 6H15.7469C15.9125 6.64062 16 7.30937 16 8C16 8.69063 15.9125 9.35938 15.7469 10H11.9C11.9656 9.35625 12 8.6875 12 8C12 7.3125 11.9656 6.64375 11.9 6ZM15.4187 5H11.7719C11.4594 3.00312 10.8406 1.33125 10.0437 0.2625C12.4906 0.909375 14.4812 2.68438 15.4156 5H15.4187ZM10.7594 5H5.24062C5.43125 3.8625 5.725 2.85625 6.08437 2.04063C6.4125 1.30313 6.77812 0.76875 7.13125 0.43125C7.48125 0.1 7.77187 0 8 0C8.22812 0 8.51875 0.1 8.86875 0.43125C9.22187 0.76875 9.5875 1.30313 9.91562 2.04063C10.2781 2.85313 10.5687 3.85938 10.7594 5ZM4.22813 5H0.58125C1.51875 2.68438 3.50625 0.909375 5.95625 0.2625C5.15938 1.33125 4.54063 3.00312 4.22813 5ZM0.253125 6H4.1C4.03437 6.64375 4 7.3125 4 8C4 8.6875 4.03437 9.35625 4.1 10H0.253125C0.0875 9.35938 0 8.69063 0 8C0 7.30937 0.0875 6.64062 0.253125 6ZM6.08437 13.9563C5.72187 13.1438 5.43125 12.1375 5.24062 11H10.7594C10.5687 12.1375 10.275 13.1438 9.91562 13.9563C9.5875 14.6938 9.22187 15.2281 8.86875 15.5656C8.51875 15.9 8.22812 16 8 16C7.77187 16 7.48125 15.9 7.13125 15.5688C6.77812 15.2313 6.4125 14.6969 6.08437 13.9594V13.9563ZM4.22813 11C4.54063 12.9969 5.15938 14.6687 5.95625 15.7375C3.50625 15.0906 1.51875 13.3156 0.58125 11H4.22813ZM15.4187 11C14.4812 13.3156 12.4937 15.0906 10.0469 15.7375C10.8438 14.6687 11.4594 12.9969 11.775 11H15.4187Z"
                      fill="#4B5563"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_453">
                      <path d="M0 0H16V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="sidebar-item-text">Log out</div>
            </div>
          </div>
        </div>
        <div className="settings-main">
          <div className="settings-card">
            <div className="settings-card-header">
              <div className="settings-card-title">Account Settings</div>
              <div className="settings-card-subtitle">
                Manage your account information and preferences
              </div>
            </div>
            <div className="profile-photo-section">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3e6e893724e2fef99365ecd80bc227ff6756af"
                alt="Profile"
                className="profile-photo"
              />
              <div className="profile-photo-actions">
                <div className="profile-photo-label">Profile Photo</div>
                <div className="profile-photo-buttons">
                  <button className="btn-secondary">Upload New</button>
                  <button className="btn-secondary btn-danger">Remove</button>
                </div>
              </div>
            </div>
            <div className="settings-section">
              <div className="section-title">Personal Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" value="John" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" value="Doe" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    value="john.doe@example.com"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    value="+1 (555) 000-0000"
                    className="form-input"
                  />
                </div>
              </div>
            </div>
            <div className="settings-section">
              <div className="section-title">Time Zone</div>
              <div className="select-wrapper">
                <select className="form-select">
                  <option>(GMT-08:00) Pacific Time</option>
                </select>
                <div className="select-arrow">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.01445 8.29127C6.17919 8.13277 6.40013 8.04616 6.62871 8.05047C6.85728 8.05478 7.0748 8.14967 7.23345 8.31427L11.4999 12.843L15.7664 8.31427C15.844 8.22878 15.9379 8.15972 16.0427 8.11119C16.1474 8.06265 16.2608 8.03564 16.3762 8.03174C16.4915 8.02784 16.6065 8.04714 16.7143 8.08849C16.822 8.12984 16.9204 8.19241 17.0035 8.27247C17.0867 8.35254 17.1529 8.44848 17.1983 8.55461C17.2437 8.66075 17.2673 8.77491 17.2678 8.89034C17.2682 9.00577 17.2455 9.12011 17.201 9.2266C17.1564 9.33309 17.091 9.42955 17.0084 9.51027L12.1209 14.6853C12.0405 14.7687 11.944 14.8351 11.8373 14.8805C11.7306 14.9258 11.6159 14.9492 11.4999 14.9492C11.384 14.9492 11.2693 14.9258 11.1626 14.8805C11.0559 14.8351 10.9594 14.7687 10.8789 14.6853L5.99145 9.51027C5.83294 9.34553 5.74633 9.12459 5.75064 8.89601C5.75495 8.66744 5.84984 8.44992 6.01445 8.29127Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="settings-section">
              <div className="section-title">Language</div>
              <div className="select-wrapper">
                <select className="form-select">
                  <option>English (US)</option>
                </select>
                <div className="select-arrow">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.01445 8.29127C6.17919 8.13277 6.40013 8.04616 6.62871 8.05047C6.85728 8.05478 7.0748 8.14967 7.23345 8.31427L11.4999 12.843L15.7664 8.31427C15.844 8.22878 15.9379 8.15972 16.0427 8.11119C16.1474 8.06265 16.2608 8.03564 16.3762 8.03174C16.4915 8.02784 16.6065 8.04714 16.7143 8.08849C16.822 8.12984 16.9204 8.19241 17.0035 8.27247C17.0867 8.35254 17.1529 8.44848 17.1983 8.55461C17.2437 8.66075 17.2673 8.77491 17.2678 8.89034C17.2682 9.00577 17.2455 9.12011 17.201 9.2266C17.1564 9.33309 17.091 9.42955 17.0084 9.51027L12.1209 14.6853C12.0405 14.7687 11.944 14.8351 11.8373 14.8805C11.7306 14.9258 11.6159 14.9492 11.4999 14.9492C11.384 14.9492 11.2693 14.9258 11.1626 14.8805C11.0559 14.8351 10.9594 14.7687 10.8789 14.6853L5.99145 9.51027C5.83294 9.34553 5.74633 9.12459 5.75064 8.89601C5.75495 8.66744 5.84984 8.44992 6.01445 8.29127Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="settings-footer">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
