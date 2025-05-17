import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
  CircularProgress,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Layout from './Layout';
import api from '../api';
import TrainingHistory from "../components/TrainingHistory";

function UploadDataset() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setMessage('');
    setAnalysis(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a dataset first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await api.post('/model/train', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = res.data;

      setAnalysis({
        type: file.name.split('.').pop().toUpperCase(),
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        rows: data.rows,
        numeric: data.columns.numeric,
        categorical: data.columns.categorical,
        datetime: data.columns.datetime,
        completeness: data.completeness,
        accuracy: data.accuracy,
      });

      setMessage('Model trained successfully!');
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.msg || 'Upload failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Container maxWidth="lg">
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
              {file ? `Selected File: ${file.name}` : 'Drag and drop your dataset file here, or'}
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }} component="label">
              Browse Files
              <input
                type="file"
                hidden
                accept=".csv,.xlsx,.json"
                onChange={handleFileChange}
              />
            </Button>
            <Typography variant="caption" display="block" mt={1}>
              Supported formats: CSV, XLSX, JSON (Max size: 50MB)
            </Typography>
          </Box>

          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Upload and Train'}
            </Button>
          </Box>

          {message && (
            <Typography mt={2} color={message.includes('success') ? 'primary' : 'error'}>
              {message}
            </Typography>
          )}
        </Paper>

        {analysis && (
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Dataset Summary
            </Typography>
            <Chip
              label="✅ Dataset successfully uploaded and trained"
              color="success"
              sx={{ mb: 2 }}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle2">File Information</Typography>
                  <Typography variant="body2">Type: {analysis.type}</Typography>
                  <Typography variant="body2">Size: {analysis.size}</Typography>
                  <Typography variant="body2">Rows: {analysis.rows}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle2">Column Types</Typography>
                  <Typography variant="body2">Numeric: {analysis.numeric}</Typography>
                  <Typography variant="body2">Categorical: {analysis.categorical}</Typography>
                  <Typography variant="body2">Date/Time: {analysis.datetime}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle2">Training Result</Typography>
                  <Typography variant="body2">Completeness: {analysis.completeness}</Typography>
                  <Typography variant="body2">Accuracy: {analysis.accuracy}%</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        )}

        <TrainingHistory />
      </Container>
    </Layout>
  );
}

export default UploadDataset;
