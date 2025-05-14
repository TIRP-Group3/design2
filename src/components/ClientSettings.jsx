import React from "react";
import "../styles/ClientSettings.css";

function ClientSettings() {
  return (
    <div className="client-settings">
      <div className="settings-body">
        <div className="settings-container">
          <div className="settings-header">
            <div className="header-content">
              <div className="header-title-container">
                <div className="header-title">Settings</div>
              </div>
            </div>
          </div>
          <div className="settings-content">
            <div className="settings-layout">
              <div className="settings-column sidebar-column">
                <div className="sidebar-container">
                  <div className="sidebar-card">
                    <div className="sidebar-nav">
                      <div className="nav-item nav-item-active">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efe8d053bf176e0e95de7182c4e0f3484e1a8579?placeholderIfAbsent=true"
                          className="nav-icon"
                        />
                        <div className="nav-text">Account</div>
                      </div>
                      <div className="nav-item">
                        <div className="nav-icon-container">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc9869926a51e47a80fe4367456c5a09f6c5a241?placeholderIfAbsent=true"
                            className="nav-icon"
                          />
                        </div>
                        <div className="nav-text">Notifications</div>
                      </div>
                      <div className="nav-item">
                        <div className="nav-icon-container">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4211600e20084e52c5f2887fe6ae4f7753b4a17e?placeholderIfAbsent=true"
                            className="nav-icon"
                          />
                        </div>
                        <div className="nav-text">Appearance</div>
                      </div>
                      <div className="nav-item">
                        <div className="nav-icon-container">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d54ed72913a1d092e588c6c81204229cced5e9?placeholderIfAbsent=true"
                            className="nav-icon"
                          />
                        </div>
                        <div className="nav-text">Dashboard</div>
                      </div>
                      <div className="nav-item">
                        <div className="nav-icon-container">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed50f69e306280321eb18bc6fb505953ef140952?placeholderIfAbsent=true"
                            className="nav-icon"
                          />
                        </div>
                        <div className="nav-text">Logout</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-column main-column">
                <div className="main-content">
                  <div className="settings-card">
                    <div className="settings-card-content">
                      <div className="settings-section settings-header-section">
                        <div className="section-title">Account Settings</div>
                        <div className="section-description">
                          Manage your account information and preferences
                        </div>
                      </div>
                      <div className="profile-photo-section">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43825a9af2fd4461cbc9b01f1d13ff5e7a6d5a7c?placeholderIfAbsent=true"
                          className="profile-photo"
                        />
                        <div className="profile-photo-controls">
                          <div className="profile-photo-title">
                            Profile Photo
                          </div>
                          <div className="profile-photo-buttons">
                            <button className="btn btn-outline">
                              Upload New
                            </button>
                            <button className="btn btn-outline btn-danger">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="personal-info-section">
                        <div className="personal-info-title">
                          Personal Information
                        </div>
                        <div className="personal-info-form">
                          <div className="form-row">
                            <div className="form-group">
                              <label className="form-label">First Name</label>
                              <div className="form-input">John</div>
                            </div>
                            <div className="form-group">
                              <label className="form-label">Last Name</label>
                              <div className="form-input">Doe</div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label className="form-label">
                                Email Address
                              </label>
                              <div className="form-input">
                                john.doe@example.com
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="form-label">Phone Number</label>
                              <div className="form-input">
                                +1 (555) 000-0000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="timezone-section">
                        <div className="timezone-title">Time Zone</div>
                        <div className="select-dropdown">
                          <div className="select-value">
                            (GMT-08:00) Pacific Time
                          </div>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bff28e43a686cf9b3e9c594d0d09e0da90e4f390?placeholderIfAbsent=true"
                            className="select-arrow"
                          />
                        </div>
                      </div>
                      <div className="language-section">
                        <div className="language-title">Language</div>
                        <div className="select-dropdown">
                          <div className="select-value">English (US)</div>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bff28e43a686cf9b3e9c594d0d09e0da90e4f390?placeholderIfAbsent=true"
                            className="select-arrow"
                          />
                        </div>
                      </div>
                      <div className="actions-section">
                        <div className="actions-container">
                          <button className="btn btn-outline btn-danger">
                            Delete Account
                          </button>
                          <div className="action-buttons">
                            <button className="btn btn-outline">Cancel</button>
                            <button className="btn btn-primary">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSettings;
