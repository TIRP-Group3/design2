import React from "react";
import "../styles/ClientNotifications.css";

function ClientNotifications() {
  return (
    <div className="client-notifications">
      <div className="notifications-body">
        <div className="notifications-container">
          <div className="notifications-layout">
            <div className="sidebar-column">
              <div className="sidebar">
                <div className="sidebar-header">
                  <div className="logo-container">
                    <div className="logo-frame">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdf3411e97b45e8575e3062452fb273592ce4719?placeholderIfAbsent=true"
                        className="logo-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="sidebar-nav">
                  <div className="nav-list">
                    <div className="nav-item">
                      <div className="nav-item-active">
                        <span className="nav-item-text">Notifications</span>
                        <div className="nav-link">Dashboard</div>
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
                <div className="notifications-card">
                  <h2 className="card-title">Recent Activity</h2>
                  <div className="notifications-list">
                    <div className="notification-item">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a52a799de0aa6fd7c89031af97b6ea3f680dc5?placeholderIfAbsent=true"
                        className="notification-icon"
                      />
                      <div className="notification-content">
                        <div className="notification-title">
                          New detection found
                        </div>
                        <div className="notification-time">2 minutes ago</div>
                      </div>
                    </div>
                    <div className="notification-item">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/959a0778e8652e3f37d197e07a1a59309c236fd1?placeholderIfAbsent=true"
                        className="notification-icon"
                      />
                      <div className="notification-content">
                        <div className="notification-title">
                          Dataset uploaded
                        </div>
                        <div className="notification-time">15 minutes ago</div>
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

export default ClientNotifications;
