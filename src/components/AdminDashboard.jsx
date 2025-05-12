import React from "react";

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-main">
            <div className="header-left">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f8f4b428ba3510ea4a4b2e970bfcb90f8d330fc?placeholderIfAbsent=true"
                className="logo-icon"
                alt="Logo"
              />
              <div className="nav-container">
                <div className="nav-items">
                  <div className="nav-item active">Dashboard</div>
                  <div className="nav-item">Detection</div>
                  <div className="nav-item">Upload Dataset</div>
                  <div className="nav-item">Settings</div>
                  <div className="nav-item">Predictions</div>
                </div>
              </div>
            </div>
            <div className="header-right">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dffc2fbd96c0d72f837b86f2e848c661995ac3a6?placeholderIfAbsent=true"
                className="user-avatar"
                alt="User avatar"
              />
              <div className="user-info">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/75c0ce33fb418cae81cfcf8b94d10325853b66a5?placeholderIfAbsent=true"
                  className="user-icon"
                  alt="User icon"
                />
                <div className="user-name">Admin User</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        {/* Stats Cards Section */}
        <div className="stats-section">
          <div className="stats-row">
            <div className="stats-column">
              <div className="stats-card">
                <div className="stats-card-content">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b176597b976f95bfd97b4b94aae1ae07af559782?placeholderIfAbsent=true"
                    className="stats-icon"
                    alt="Clean files icon"
                  />
                  <div className="stats-details">
                    <div className="stats-label">Clean Files</div>
                    <div className="stats-value">8,549</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats-column">
              <div className="stats-card">
                <div className="stats-card-content">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf87fe6184e538eb7abcf6b5aedd47ac650373?placeholderIfAbsent=true"
                    className="stats-icon"
                    alt="Malware icon"
                  />
                  <div className="stats-details">
                    <div className="stats-label">Detected Malware</div>
                    <div className="stats-value">246</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats-column">
              <div className="stats-card">
                <div className="stats-card-content">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/085cd118d53cad9bb5baa313ca8d411da2997c88?placeholderIfAbsent=true"
                    className="stats-icon"
                    alt="Users icon"
                  />
                  <div className="stats-details">
                    <div className="stats-label">Active Users</div>
                    <div className="stats-value">1,423</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats-column">
              <div className="stats-card">
                <div className="stats-card-content">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/60dcd5071e37997cc08d67da4ffb6931078549ba?placeholderIfAbsent=true"
                    className="stats-icon"
                    alt="Detection rate icon"
                  />
                  <div className="stats-details">
                    <div className="stats-label">Detection Rate</div>
                    <div className="stats-value">97.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Detections and Analytics Section */}
        <div className="content-section">
          <div className="content-row">
            <div className="content-column">
              <div className="detections-card">
                <div className="card-header">
                  <div className="card-title">Recent Detections</div>
                  <div className="view-all-button">View All</div>
                </div>
                <div className="detections-table-container">
                  <div className="detections-table">
                    <div className="table-header">
                      <div className="table-row">
                        <div className="table-header-cell">File Name</div>
                        <div className="table-header-cell">Type</div>
                        <div className="table-header-cell">Status</div>
                        <div className="table-header-cell">Date</div>
                      </div>
                    </div>
                    <div className="table-body">
                      <div className="table-row">
                        <div className="table-cell">suspicious_file.exe</div>
                        <div className="table-cell">Executable</div>
                        <div className="table-cell">
                          <div className="status-badge malicious">
                            Malicious
                          </div>
                        </div>
                        <div className="table-cell">Jan 15, 2025</div>
                      </div>
                      <div className="table-row">
                        <div className="table-cell">document.pdf</div>
                        <div className="table-cell">PDF</div>
                        <div className="table-cell">
                          <div className="status-badge clean">Clean</div>
                        </div>
                        <div className="table-cell">Jan 15, 2025</div>
                      </div>
                      <div className="table-row">
                        <div className="table-cell">script.js</div>
                        <div className="table-cell">JavaScript</div>
                        <div className="table-cell">
                          <div className="status-badge suspicious">
                            Suspicious
                          </div>
                        </div>
                        <div className="table-cell">Jan 14, 2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-column">
              <div className="analytics-card">
                <div className="card-header">
                  <div className="card-title">Detection Analytics</div>
                  <div className="period-selector">
                    <div className="period-text">Last 7 days</div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e839c591ad8037579fc0adb789ff0fa80bafc5?placeholderIfAbsent=true"
                      className="dropdown-icon"
                      alt="Dropdown"
                    />
                  </div>
                </div>
                <div className="analytics-content">
                  <div className="chart-container">
                    <div className="chart-block">
                      <div className="chart-title">Malware Detected %</div>
                      <div className="chart-frame">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e82011eaed627c4c27031ee4c6215cd99541f1cd?placeholderIfAbsent=true"
                          className="chart-image"
                          alt="Chart"
                        />
                        <div className="chart-card">
                          <div className="chart-item">
                            <div className="chart-tag">
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f057db730fdc57947a3ee8d0d23a492b94c894?placeholderIfAbsent=true"
                                className="chart-tag-icon"
                                alt="Tag icon"
                              />
                              <div className="chart-tag-text">filename </div>
                            </div>
                            <div className="chart-value">52.1%</div>
                          </div>
                          <div className="chart-item">
                            <div className="chart-tag">
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/396fd785ffa530067cbd1ff001d18846d42a2669?placeholderIfAbsent=true"
                                className="chart-tag-icon"
                                alt="Tag icon"
                              />
                              <div className="chart-tag-text">filename</div>
                            </div>
                            <div className="chart-value">22.8%</div>
                          </div>
                          <div className="chart-item">
                            <div className="chart-tag">
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/498696047e5b7e1a2b80683019c9036ed6cc5ce1?placeholderIfAbsent=true"
                                className="chart-tag-icon"
                                alt="Tag icon"
                              />
                              <div className="chart-tag-text">filename</div>
                            </div>
                            <div className="chart-value">13.9%</div>
                          </div>
                          <div className="chart-item">
                            <div className="chart-tag">
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3dd9cb925c85ca557b2e500a01fc4b2bd3fe89?placeholderIfAbsent=true"
                                className="chart-tag-icon"
                                alt="Tag icon"
                              />
                              <div className="chart-tag-text">filename</div>
                            </div>
                            <div className="chart-value">11.2%</div>
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

        {/* Dataset Management Section */}
        <div className="dataset-section">
          <div className="card-header">
            <div className="card-title">Dataset Management</div>
            <div className="upload-button">Upload Dataset</div>
          </div>
          <div className="dataset-cards">
            <div className="dataset-card">
              <div className="dataset-header">
                <div className="dataset-info">
                  <div className="dataset-icon-container">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f02c4579420980d608a1b45578532c218580ec0?placeholderIfAbsent=true"
                      className="dataset-icon"
                      alt="Malware signatures icon"
                    />
                  </div>
                  <div className="dataset-title">Malware Signatures</div>
                </div>
                <div className="dataset-size">2.3 GB</div>
              </div>
              <div className="dataset-footer">
                <div className="dataset-date">Last updated: Jan 15, 2025</div>
                <div className="update-button">Update</div>
              </div>
            </div>
            <div className="dataset-card">
              <div className="dataset-header">
                <div className="dataset-info">
                  <div className="dataset-icon-container">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dc33c7f62ed62fa3bfb98e7d9ff82257b30a057?placeholderIfAbsent=true"
                      className="dataset-icon"
                      alt="Train dataset icon"
                    />
                  </div>
                  <div className="dataset-title">Train Dataset</div>
                </div>
                <div className="dataset-size">1.8 GB</div>
              </div>
              <div className="dataset-footer">
                <div className="dataset-date">Last updated: Jan 14, 2025</div>
                <div className="update-button">Update</div>
              </div>
            </div>
            <div className="dataset-card">
              <div className="dataset-header">
                <div className="dataset-info">
                  <div className="dataset-icon-container">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/31132d84b5ac2376127e338323fa06cac62e89f9?placeholderIfAbsent=true"
                      className="dataset-icon"
                      alt="Behavior analysis icon"
                    />
                  </div>
                  <div className="dataset-title">Behavior Analysis</div>
                </div>
                <div className="dataset-size">3.1 GB</div>
              </div>
              <div className="dataset-footer">
                <div className="dataset-date">Last updated: Jan 13, 2025</div>
                <div className="update-button">Update</div>
              </div>
            </div>
          </div>
        </div>

        {/* User Management Section */}
        <div className="user-section">
          <div className="card-header">
            <div className="card-title">User Management</div>
            <div className="add-user-button">Add User</div>
          </div>
          <div className="users-table-container">
            <div className="users-table">
              <div className="table-header">
                <div className="table-row">
                  <div className="table-header-cell">User</div>
                  <div className="table-header-cell">Role</div>
                  <div className="table-header-cell">Status</div>
                  <div className="table-header-cell">Last Active</div>
                  <div className="table-header-cell">Actions</div>
                </div>
              </div>
              <div className="table-body">
                <div className="table-row">
                  <div className="table-cell user-cell">
                    <div className="user-info-container">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/519ea8152b65472d7d45e377fc509c6de5dd8bd1?placeholderIfAbsent=true"
                        className="user-avatar-small"
                        alt="User avatar"
                      />
                      <div className="user-details">
                        <div className="user-name-cell">John Smith</div>
                        <div className="user-email">john@example.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="table-cell">Administrator</div>
                  <div className="table-cell">
                    <div className="status-badge active">Active</div>
                  </div>
                  <div className="table-cell">2 minutes ago</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb63c7f88edb59e28555f8d26ea342a2cd13d858?placeholderIfAbsent=true"
                    className="action-buttons"
                    alt="Action buttons"
                  />
                </div>
                <div className="table-row">
                  <div className="table-cell user-cell">
                    <div className="user-info-container">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5113408400db6568af3d3fa01c90e94ae10215e1?placeholderIfAbsent=true"
                        className="user-avatar-small"
                        alt="User avatar"
                      />
                      <div className="user-details">
                        <div className="user-name-cell">Sarah Johnson</div>
                        <div className="user-email">sarah@example.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="table-cell">Analyst</div>
                  <div className="table-cell">
                    <div className="status-badge active">Active</div>
                  </div>
                  <div className="table-cell">1 hour ago</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4fad7c41c12d922cee7cecb37a4048b5905d212?placeholderIfAbsent=true"
                    className="action-buttons"
                    alt="Action buttons"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
