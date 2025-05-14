import React from "react";
import "../styles/AdminNotifications.css";

function AdminNotifications() {
  return (
    <div className="admin-notifications">
      <div className="notifications-body">
        <div className="notifications-container">
          <div className="notifications-layout">
            <div className="sidebar-column">
              <div className="sidebar">
                <div className="sidebar-header">
                  <div className="logo-container">
                    <div className="logo-frame">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b5206233e8ba9d16b4ec44c2ab5ca84988368d0?placeholderIfAbsent=true"
                        className="logo-image"
                        alt="Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="sidebar-nav">
                  <div className="nav-list">
                    <div className="nav-item">
                      <div className="nav-item-active">
                        <span className="nav-item-text">Notifications</span>
                        <div className="nav-item-dashboard">Dashboard</div>
                      </div>
                    </div>
                    <div className="nav-item-spacer"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-column">
              <div className="content-container">
                <div className="page-title-container">
                  <div className="page-title">Notifications</div>
                </div>
                <div className="activity-card">
                  <h2 className="activity-title">Recent Activity</h2>
                  <div className="activity-list">
                    <div className="activity-item">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c793126a07c48cd6ba75444053061e04d568ac?placeholderIfAbsent=true"
                        className="activity-icon"
                        alt="Detection icon"
                      />
                      <div className="activity-details">
                        <div className="activity-name">New detection found</div>
                        <div className="activity-time">2 minutes ago</div>
                      </div>
                    </div>
                    <div className="activity-item">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eceac1d2c9e70add8e6c7a9c93df2fae9f4e4577?placeholderIfAbsent=true"
                        className="activity-icon"
                        alt="Dataset icon"
                      />
                      <div className="activity-details">
                        <div className="activity-name">Dataset uploaded</div>
                        <div className="activity-time">15 minutes ago</div>
                      </div>
                    </div>
                    <div className="activity-item">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe4440b941e576b50dc94dcf33cdea8bac675a6?placeholderIfAbsent=true"
                        className="activity-icon"
                        alt="User icon"
                      />
                      <div className="activity-details">
                        <div className="activity-name">New user registered</div>
                        <div className="activity-time">1 hour ago</div>
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

export default AdminNotifications;
