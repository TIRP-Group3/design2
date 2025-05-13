import React from "react";

function UploadDataset() {
  return (
    <div className="upload-container">
      <header className="upload-header">
        <div className="header-content">
          <div className="nav-items">
            <div className="nav-item">Dashboard</div>
            <div className="nav-item active">Upload Dataset</div>
          </div>
        </div>
      </header>

      <main className="upload-main">
        {/* Upload Section */}
        <div className="upload-section">
          <div className="section-title">Upload Dataset</div>
          <div className="upload-area">
            <div className="upload-icon">
              <svg
                width="46"
                height="37"
                viewBox="0 0 46 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_838)">
                  <path
                    d="M10.7762 34.3523C5.18642 34.3737 0.633905 29.856 0.612472 24.2662C0.595542 19.8506 3.40769 16.0851 7.33985 14.6849C7.33209 14.4951 7.32433 14.3052 7.3236 14.1154C7.29977 7.89981 12.3148 2.84617 18.5304 2.82234C22.6999 2.80636 26.3437 5.05646 28.3043 8.42397C29.3703 7.70269 30.6624 7.27586 32.0475 7.27055C35.7741 7.25626 38.8091 10.2681 38.8234 13.9946C38.8267 14.8524 38.6681 15.6687 38.3827 16.4291C42.4921 17.2431 45.5998 20.8663 45.6165 25.2187C45.6355 30.1897 41.6221 34.234 36.651 34.2531L10.7762 34.3523ZM16.2724 19.0733C15.614 19.7368 15.6181 20.8055 16.2815 21.4569C16.9449 22.1083 18.0137 22.1112 18.6651 21.4477L21.3967 18.6951L21.4329 28.1239C21.4365 29.059 22.1917 29.8085 23.1268 29.8049C24.062 29.8013 24.8114 29.0461 24.8079 28.111L24.7717 18.6821L27.5244 21.4138C28.1879 22.0722 29.2566 22.0681 29.908 21.4046C30.5593 20.7412 30.5623 19.6724 29.8988 19.0211L24.2523 13.4177C23.5888 12.7593 22.5201 12.7634 21.8687 13.4268L16.2653 19.0733L16.2724 19.0733Z"
                    fill="#3B82F6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_838">
                    <path
                      d="M0.521851 0.641357L45.5215 0.468821L45.6595 36.4686L0.65988 36.6411L0.521851 0.641357Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="upload-text">
              Drag and drop your dataset file here, or
            </div>
            <button className="browse-button">Browse Files</button>
            <div className="upload-formats">
              Supported formats: CSV, XLSX, JSON (Max size: 50MB)
            </div>
          </div>
        </div>

        {/* Dataset Detection Section */}
        <div className="detection-section">
          <div className="section-title">Dataset Detection</div>
          <div className="detection-status">
            <div className="status-icon">
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_852)">
                  <path
                    d="M14.0714 3.8449C14.4636 4.23402 14.466 4.86839 14.0769 5.26051L6.10759 13.2911C5.71847 13.6832 5.0841 13.6857 4.69198 13.2966L0.676671 9.31192C0.284551 8.9228 0.282118 8.28843 0.671243 7.89631C1.06037 7.50419 1.69474 7.50175 2.08686 7.89088L5.3932 11.1689L12.6589 3.85031C13.0481 3.45819 13.6824 3.45576 14.0746 3.84489L14.0714 3.8449Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_852">
                    <path
                      d="M0.352661 0.60376L14.3526 0.550082L14.4139 16.55L0.414007 16.6036L0.352661 0.60376Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="status-text">Dataset successfully detected</div>
          </div>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-title">File Information</div>
              <div className="info-content">
                <div className="info-row">
                  <span className="info-label">Type:</span>
                  <span className="info-value">CSV</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Size:</span>
                  <span className="info-value">2.4 MB</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Rows:</span>
                  <span className="info-value">1,234</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-title">Column Types</div>
              <div className="info-content">
                <div className="info-row">
                  <span className="info-label">Numeric:</span>
                  <span className="info-value">8</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Categorical:</span>
                  <span className="info-value">4</span>
                </div>
                <div className="info-row">
                  <span className="info-label">DateTime:</span>
                  <span className="info-value">2</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-title">Data Quality</div>
              <div className="info-content">
                <div className="info-row">
                  <span className="info-label">Missing Values:</span>
                  <span className="info-value">0.5%</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Duplicates:</span>
                  <span className="info-value">None</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Consistency:</span>
                  <span className="info-value">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Results Section */}
        <div className="analysis-section">
          <div className="section-title">Analysis Results</div>
          <div className="section-divider"></div>

          <div className="result-cards">
            <div className="result-card success">
              <div className="result-header">
                <span className="result-label">Data Completeness</span>
                <div className="result-icon">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_923)">
                      <path
                        d="M8.13612 16.0918C10.2578 16.0836 12.2894 15.233 13.7839 13.727C15.2785 12.2209 16.1135 10.1829 16.1054 8.06115C16.0972 5.93944 15.2466 3.90785 13.7406 2.41332C12.2345 0.918797 10.1965 0.0837504 8.07477 0.0918855C5.95305 0.10002 3.92147 0.950671 2.42694 2.4567C0.932414 3.96274 0.0973672 6.00078 0.105502 8.1225C0.113637 10.2442 0.964288 12.2758 2.47032 13.7703C3.97635 15.2649 6.0144 16.0999 8.13612 16.0918ZM11.631 6.60955L7.6464 10.6249C7.35378 10.9197 6.87878 10.9216 6.58704 10.6289L4.57938 8.6366C4.28451 8.34398 4.28269 7.86898 4.57532 7.57723C4.86795 7.28548 5.34294 7.28054 5.63469 7.57317L7.10906 9.03628L10.5645 5.55113C10.8571 5.25626 11.3321 5.25443 11.6238 5.54707C11.9156 5.8397 11.9205 6.31469 11.6279 6.60644L11.631 6.60955Z"
                        fill="#059669"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_923">
                        <path
                          d="M0.0748291 0.122559L16.0747 0.0612123L16.1361 16.0611L0.136175 16.1224L0.0748291 0.122559Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="result-value">99.5%</div>
            </div>

            <div className="result-card warning">
              <div className="result-header">
                <span className="result-label">Processing Time</span>
                <div className="result-icon">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_939)">
                      <path
                        d="M8.07477 0.0918855C10.1965 0.0837504 12.2345 0.918797 13.7406 2.41332C15.2466 3.90785 16.0972 5.93944 16.1054 8.06115C16.1135 10.1829 15.2785 12.2209 13.7839 13.727C12.2894 15.233 10.2578 16.0836 8.13612 16.0918C6.0144 16.0999 3.97635 15.2649 2.47032 13.7703C0.964288 12.2758 0.113637 10.2442 0.105502 8.1225C0.0973672 6.00078 0.932414 3.96274 2.42694 2.4567C3.92147 0.950671 5.95305 0.10002 8.07477 0.0918855ZM7.33915 3.84473L7.35545 8.0947C7.35641 8.3447 7.48231 8.57859 7.69222 8.71842L10.6999 10.7069C11.0445 10.9368 11.5098 10.8413 11.7397 10.4935C11.9696 10.1458 11.8741 9.68364 11.5263 9.45372L8.8539 7.68895L8.83914 3.83898C8.83755 3.42336 8.50189 3.09027 8.08627 3.09186C7.67065 3.09346 7.33756 3.42911 7.33915 3.84473Z"
                        fill="#EA580C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_939">
                        <path
                          d="M0.0748291 0.122559L16.0747 0.0612123L16.1361 16.0611L0.136175 16.1224L0.0748291 0.122559Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="result-value">1.2s</div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="outline-button">Download Report</button>
            <button className="primary-button">Scan Results</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UploadDataset;
