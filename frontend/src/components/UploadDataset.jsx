import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Layout from './Layout';

function UploadDataset() {
  return (
    <Layout>
      <Container maxWidth="lg">
        {/* Upload Area */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Upload Dataset
          </Typography>
          <Box
            sx={{
              border: '2px dashed #90caf9',
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              backgroundColor: '#f5faff',
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 50, color: '#2196f3' }} />
            <Typography mt={2}>
              Drag and drop your dataset file here, or
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Browse Files
            </Button>
            <Typography variant="caption" display="block" mt={1}>
              Supported formats: CSV, XLSX, JSON (Max size: 50MB)
            </Typography>
          </Box>
        </Paper>

        {/* Dataset Detection */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Dataset Detection
          </Typography>
          <Chip
            label="✅ Dataset successfully detected"
            color="success"
            sx={{ mb: 2 }}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle2">File Information</Typography>
                <Typography variant="body2">Type: CSV</Typography>
                <Typography variant="body2">Size: 2.4 MB</Typography>
                <Typography variant="body2">Rows: 1,234</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle2">Column Types</Typography>
                <Typography variant="body2">Numeric: 8</Typography>
                <Typography variant="body2">Categorical: 4</Typography>
                <Typography variant="body2">Date/Time: 2</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle2">Data Quality</Typography>
                <Typography variant="body2">Missing Values: 0.5%</Typography>
                <Typography variant="body2">Duplicates: None</Typography>
                <Typography variant="body2">Consistency: 98%</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {/* Analysis Results */}
        <Typography variant="h6" gutterBottom>
          Analysis Results
        </Typography>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: '#e8f5e9',
                borderLeft: '6px solid #4caf50',
              }}
            >
              <Typography variant="subtitle2">Data Completeness</Typography>
              <Typography variant="h6" color="success.main">
                99.5%
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: '#fff3e0',
                borderLeft: '6px solid #ff9800',
              }}
            >
              <Typography variant="subtitle2">Processing Time</Typography>
              <Typography variant="h6" color="warning.main">
                1.2s
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Footer Buttons */}
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined">Download Report</Button>
          <Button variant="contained" color="primary">
            Scan Results
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}

export default UploadDataset;
