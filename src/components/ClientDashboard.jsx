import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ClientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_398)">
                  <path
                    d="M12 0C12.2156 0 12.4313 0.046875 12.6281 0.135938L21.4547 3.88125C22.486 4.31719 23.2547 5.33438 23.25 6.5625C23.2266 11.2125 21.3141 19.7203 13.2375 23.5875C12.4547 23.9625 11.5453 23.9625 10.7625 23.5875C2.68596 19.7203 0.773459 11.2125 0.750021 6.5625C0.745334 5.33438 1.51408 4.31719 2.54533 3.88125L11.3766 0.135938C11.5688 0.046875 11.7844 0 12 0ZM12 3.13125V20.85C18.4688 17.7188 20.2078 10.7859 20.25 6.62813L12 3.13125Z"
                    fill="#4F46E5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_398">
                    <path d="M0 0H24V24H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <nav className="main-nav">
              <div className="nav-item active">Dashboard</div>
              <Link to="/quick-scan" className="nav-item">Quick Scan</Link>
              <div className="nav-item">History</div>
              <div className="nav-item">Reports</div>
              <div className="nav-item">Settings</div>
            </nav>
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
                <g clipPath="url(#clip0_1_410)">
                  <path
                    d="M8.7501 0C8.0587 0 7.5001 0.558594 7.5001 1.25V1.94922C4.66807 2.39844 2.5001 4.85156 2.5001 7.8125V9.11719C2.5001 10.8906 1.89463 12.6133 0.789166 13.9961L0.207134 14.7266C-0.0194282 15.0078 -0.0623969 15.3945 0.0938531 15.7188C0.250103 16.043 0.578228 16.25 0.937603 16.25H16.5626C16.922 16.25 17.2501 16.043 17.4064 15.7188C17.5626 15.3945 17.5196 15.0078 17.2931 14.7266L16.711 14C15.6056 12.6133 15.0001 10.8906 15.0001 9.11719V7.8125C15.0001 4.85156 12.8321 2.39844 10.0001 1.94922V1.25C10.0001 0.558594 9.44151 0 8.7501 0ZM8.7501 3.75H9.0626C11.3048 3.75 13.1251 5.57031 13.1251 7.8125V9.11719C13.1251 10.9883 13.6681 12.8125 14.6759 14.375H2.82432C3.83213 12.8125 4.3751 10.9883 4.3751 9.11719V7.8125C4.3751 5.57031 6.19542 3.75 8.4376 3.75H8.7501ZM11.2501 17.5H8.7501H6.2501C6.2501 18.1641 6.51182 18.8008 6.98057 19.2695C7.44932 19.7383 8.08604 20 8.7501 20C9.41417 20 10.0509 19.7383 10.5196 19.2695C10.9884 18.8008 11.2501 18.1641 11.2501 17.5Z"
                    fill="#6B7280"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_410">
                    <path d="M0 0H17.5V20H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="user-profile">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c82b310ede89a10272e285d5d33863260bb84a92"
                alt="User avatar"
                className="avatar"
              />
              <span className="username">Client User</span>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <section className="quick-scan-section">
            <div className="section-header">
              <h2 className="section-title">Quick Scan</h2>
              <div className="section-icon">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_421)">
                    <path
                      d="M6.77348 15.0352L5.56644 13.8281C5.23441 13.4961 5.11723 13.0156 5.26566 12.5703C5.38285 12.2227 5.5391 11.7696 5.7266 11.25H1.59379C1.25785 11.25 0.94535 11.0703 0.777382 10.7774C0.609413 10.4844 0.613319 10.125 0.785194 9.83596L2.83598 6.37893C3.34379 5.52346 4.26176 5.00002 5.25394 5.00002H8.46879C8.56254 4.84377 8.65629 4.69924 8.75004 4.55862C11.9493 -0.160134 16.7149 -0.316384 19.5586 0.207054C20.0118 0.289085 20.3633 0.644554 20.4493 1.09768C20.9727 3.94533 20.8125 8.70705 16.0977 11.9063C15.961 12 15.8125 12.0938 15.6563 12.1875V15.4024C15.6563 16.3946 15.1329 17.3164 14.2774 17.8203L10.8204 19.8711C10.5313 20.043 10.1719 20.0469 9.87894 19.8789C9.58598 19.711 9.40629 19.4024 9.40629 19.0625V14.875C8.85551 15.0664 8.37504 15.2227 8.01176 15.3399C7.57426 15.4805 7.09769 15.3594 6.76957 15.0352H6.77348ZM15.6563 6.56252C16.0707 6.56252 16.4681 6.3979 16.7611 6.10488C17.0542 5.81185 17.2188 5.41442 17.2188 5.00002C17.2188 4.58562 17.0542 4.18819 16.7611 3.89517C16.4681 3.60214 16.0707 3.43752 15.6563 3.43752C15.2419 3.43752 14.8445 3.60214 14.5514 3.89517C14.2584 4.18819 14.0938 4.58562 14.0938 5.00002C14.0938 5.41442 14.2584 5.81185 14.5514 6.10488C14.8445 6.3979 15.2419 6.56252 15.6563 6.56252Z"
                      fill="#4F46E5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_421">
                      <path d="M0.65625 0H20.6562V20H0.65625V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="section-description">
              Scan a single file or small directory
            </p>
            <button className="scan-button" onClick={() => navigate('/quick-scan')}>Start Scan</button>
          </section>

          <section className="scan-results-section">
            <div className="section-header">
              <h2 className="section-title">Recent Scan Results</h2>
              <Link to="/results" className="view-all-link">
                View All Results
              </Link>
            </div>
            <div className="table-container">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Scan ID</th>
                    <th>Type</th>
                    <th>Files Scanned</th>
                    <th>Threats</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#SC125</td>
                    <td>Quick Scan</td>
                    <td>156</td>
                    <td>0</td>
                    <td>
                      <span className="status-badge clean">Clean</span>
                    </td>
                    <td>Jan 15, 2025</td>
                    <td className="action-link">View Report</td>
                  </tr>
                  <tr>
                    <td>#SC124</td>
                    <td>Quick Scan</td>
                    <td>1,453</td>
                    <td>2</td>
                    <td>
                      <span className="status-badge threat">Threats Found</span>
                    </td>
                    <td>Jan 14, 2025</td>
                    <td className="action-link">View Report</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="protection-status-section">
            <div className="section-header">
              <h2 className="section-title">Protection Status</h2>
              <span className="status-badge protected">Protected</span>
            </div>
            <div className="status-items">
              <div className="status-item">
                <div className="status-label">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_515)">
                      <path
                        d="M4.89062 13.9906L4.49687 14.9125C3.9125 14.6156 3.375 14.25 2.8875 13.8219L3.59687 13.1125C3.9875 13.4531 4.42188 13.75 4.89062 13.9906ZM1.26875 8.5H0.265625C0.309375 9.1625 0.434375 9.80313 0.63125 10.4094L1.5625 10.0375C1.40937 9.54688 1.30625 9.03125 1.26875 8.5ZM1.26875 7.5C1.3125 6.9125 1.43125 6.34375 1.61563 5.80937L0.69375 5.41563C0.459375 6.07188 0.3125 6.77187 0.265625 7.5H1.26875ZM2.00938 4.89062C2.25313 4.425 2.54688 3.99062 2.8875 3.59375L2.17812 2.88438C1.75 3.37188 1.38125 3.90938 1.0875 4.49375L2.00938 4.89062ZM12.4062 13.1125C11.9719 13.4875 11.4875 13.8094 10.9656 14.0625L11.3375 14.9937C11.9844 14.6844 12.5813 14.2875 13.1156 13.8188L12.4062 13.1125ZM3.59375 2.8875C4.02813 2.5125 4.5125 2.19062 5.03438 1.9375L4.6625 1.00625C4.01562 1.31562 3.41875 1.7125 2.8875 2.18125L3.59375 2.8875ZM13.9906 11.1094C13.7469 11.575 13.4531 12.0094 13.1125 12.4062L13.8219 13.1156C14.25 12.6281 14.6188 12.0875 14.9125 11.5063L13.9906 11.1094ZM14.7312 8.5C14.6875 9.0875 14.5687 9.65625 14.3844 10.1906L15.3062 10.5844C15.5406 9.925 15.6875 9.225 15.7312 8.49687H14.7312V8.5ZM10.0375 14.4375C9.54688 14.5938 9.03125 14.6937 8.5 14.7312V15.7344C9.1625 15.6906 9.80313 15.5656 10.4094 15.3687L10.0375 14.4375ZM7.5 14.7312C6.9125 14.6875 6.34375 14.5687 5.80937 14.3844L5.41563 15.3062C6.075 15.5406 6.775 15.6875 7.50313 15.7312V14.7312H7.5ZM14.4375 5.9625C14.5938 6.45312 14.6937 6.96875 14.7312 7.5H15.7344C15.6906 6.8375 15.5656 6.19687 15.3687 5.59062L14.4375 5.9625ZM2.8875 12.4062C2.5125 11.9719 2.19062 11.4875 1.9375 10.9656L1.00625 11.3375C1.31562 11.9844 1.7125 12.5813 2.18125 13.1156L2.8875 12.4062ZM8.5 1.26875C9.0875 1.3125 9.65312 1.43125 10.1906 1.61563L10.5844 0.69375C9.92813 0.459375 9.22812 0.3125 8.5 0.265625V1.26875ZM5.9625 1.5625C6.45312 1.40625 6.96875 1.30625 7.5 1.26875V0.265625C6.8375 0.309375 6.19687 0.434375 5.59062 0.63125L5.9625 1.5625ZM13.8219 2.88438L13.1125 3.59375C13.4875 4.02813 13.8094 4.5125 14.0656 5.03438L14.9969 4.6625C14.6875 4.01562 14.2906 3.41875 13.8219 2.88438ZM12.4062 2.8875L13.1156 2.17812C12.6281 1.75 12.0906 1.38125 11.5063 1.0875L11.1125 2.00938C11.575 2.25313 12.0125 2.54688 12.4062 2.8875Z"
                        fill="#059669"
                      />
                      <path
                        d="M8 12.25C8.48325 12.25 8.875 11.8582 8.875 11.375C8.875 10.8918 8.48325 10.5 8 10.5C7.51675 10.5 7.125 10.8918 7.125 11.375C7.125 11.8582 7.51675 12.25 8 12.25Z"
                        fill="#059669"
                      />
                      <path
                        d="M8.24057 9.75H7.74057C7.53432 9.75 7.36557 9.58125 7.36557 9.375C7.36557 7.15625 9.78432 7.37812 9.78432 6.00625C9.78432 5.38125 9.22807 4.75 7.99057 4.75C7.0812 4.75 6.6062 5.05 6.14057 5.64687C6.0187 5.80312 5.7937 5.83438 5.63432 5.72188L5.22495 5.43437C5.04995 5.3125 5.00932 5.06562 5.1437 4.89687C5.8062 4.04687 6.5937 3.5 7.9937 3.5C9.62807 3.5 11.0374 4.43125 11.0374 6.00625C11.0374 8.11875 8.6187 7.99062 8.6187 9.375C8.61557 9.58125 8.44682 9.75 8.24057 9.75Z"
                        fill="#059669"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_515">
                        <path d="M0 0H16V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Real-time Protection</span>
                </div>
                <span className="status-value active">Active</span>
              </div>
              <div className="status-item">
                <div className="status-label">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_526)">
                      <path
                        d="M14 2.5V4C14 5.38125 10.8656 6.5 7 6.5C3.13438 6.5 0 5.38125 0 4V2.5C0 1.11875 3.13438 0 7 0C10.8656 0 14 1.11875 14 2.5ZM12.2875 6.70937C12.9375 6.47813 13.5344 6.18125 14 5.81563V9C14 10.3813 10.8656 11.5 7 11.5C3.13438 11.5 0 10.3813 0 9V5.81563C0.465625 6.18438 1.0625 6.47813 1.7125 6.70937C3.11562 7.20937 4.98438 7.5 7 7.5C9.01562 7.5 10.8844 7.20937 12.2875 6.70937ZM0 10.8156C0.465625 11.1844 1.0625 11.4781 1.7125 11.7094C3.11562 12.2094 4.98438 12.5 7 12.5C9.01562 12.5 10.8844 12.2094 12.2875 11.7094C12.9375 11.4781 13.5344 11.1813 14 10.8156V13.5C14 14.8813 10.8656 16 7 16C3.13438 16 0 14.8813 0 13.5V10.8156Z"
                        fill="#059669"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_526">
                        <path d="M0 0H14V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Database Version</span>
                </div>
                <span className="status-value">v2.3.14</span>
              </div>
              <div className="status-item">
                <div className="status-label">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_533)">
                      <path
                        d="M8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM7.25 3.75V8C7.25 8.25 7.375 8.48438 7.58437 8.625L10.5844 10.625C10.9281 10.8562 11.3938 10.7625 11.625 10.4156C11.8562 10.0687 11.7625 9.60625 11.4156 9.375L8.75 7.6V3.75C8.75 3.33437 8.41562 3 8 3C7.58437 3 7.25 3.33437 7.25 3.75Z"
                        fill="#059669"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_533">
                        <path d="M0 0H16V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Last Update</span>
                </div>
                <span className="status-value">2 hours ago</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
