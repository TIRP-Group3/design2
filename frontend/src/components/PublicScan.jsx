import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  CircularProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Grid,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import api from '../api';

import { useNavigate } from 'react-router-dom';
function PublicScan() {
  
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [latestResults, setLatestResults] = useState([]);
  const [batchId, setBatchId] = useState(null);
  const [summary, setSummary] = useState({ total: 0, malicious: 0, quarantined: 0, resolved: 0 });

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
  };

  const handleScan = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await api.post('/scan/upload-public', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setLatestResults(res.data.results);
      setBatchId(res.data.batch_id);
      setFile(null);

      const total = res.data.results.length;
      const malicious = res.data.results.filter(r => r.result === 'Malicious').length;
      const quarantined = res.data.results.filter(r => r.status === 'Quarantine or delete').length;
      const resolved = res.data.results.filter(r => r.status === 'Safe to keep').length;
      setSummary({ total, malicious, quarantined, resolved });
    } catch (error) {
      console.error(error);
      alert('Scan failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadCSV = () => {
    const headers = ['Filename', 'Threat Type', 'Result', 'Confidence', 'Recommendation'];
    const rows = latestResults.map(r => [
      r.filename,
      r.threat_type,
      r.result,
      (r.confidence * 100).toFixed(2) + '%',
      r.status
    ]);
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `public_scan_${batchId || 'latest'}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getChipColor = (result) => {
    switch (result) {
      case 'Malicious':
        return 'error';
      case 'Suspicious':
        return 'warning';
      case 'Clean':
      default:
        return 'success';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="outlined" onClick={() => navigate('/login')}>
          Login
        </Button>
      </Box>
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Public CSV Scan (No Login Required)
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
            {file ? `Selected File: ${file.name}` : 'Drag and drop your CSV file here or browse'}
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} component="label">
            Browse
            <input type="file" hidden accept=".csv" onChange={handleFileChange} />
          </Button>
          <Typography variant="caption" display="block" mt={1}>
            Supported format: .csv with the same structure as training data
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleScan}
            disabled={loading || !file}
          >
            {loading ? <CircularProgress size={24} /> : 'Scan for Malware'}
          </Button>
        </Box>
      </Paper>

      {latestResults.length > 0 && (
        <>
          <Typography variant="h6" gutterBottom>
            Latest Public Scan Results {batchId && <small>(Batch ID: {batchId})</small>}
          </Typography>

          <Grid container spacing={2} mb={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
                <Typography variant="body2">Total Files Scanned</Typography>
                <Typography variant="h5">{summary.total}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, backgroundColor: '#ffebee' }}>
                <Typography variant="body2">Threats Found</Typography>
                <Typography variant="h5" color="error">{summary.malicious}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, backgroundColor: '#fffde7' }}>
                <Typography variant="body2">Quarantine Recommended</Typography>
                <Typography variant="h5">{summary.quarantined}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, backgroundColor: '#e8f5e9' }}>
                <Typography variant="body2">Safe to Keep</Typography>
                <Typography variant="h5">{summary.resolved}</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="flex-end" mb={1}>
            <Button variant="outlined" onClick={handleDownloadCSV}>Download CSV</Button>
          </Box>

          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>File</TableCell>
                  <TableCell>Threat Type</TableCell>
                  <TableCell>Result</TableCell>
                  <TableCell>Confidence</TableCell>
                  <TableCell>Recommendation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {latestResults.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{entry.filename}</TableCell>
                    <TableCell>{entry.threat_type}</TableCell>
                    <TableCell>
                      <Chip label={entry.result} color={getChipColor(entry.result)} />
                    </TableCell>
                    <TableCell>{(entry.confidence * 100).toFixed(2)}%</TableCell>
                    <TableCell>{entry.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </>
      )}
    </Container>
  );
}

export default PublicScan;
