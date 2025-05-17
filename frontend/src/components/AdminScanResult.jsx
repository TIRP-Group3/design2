import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Checkbox,
} from '@mui/material';
import Layout from './Layout';
import api from '../api';

function AdminScanResult() {
  const [threatData, setThreatData] = useState([]);
  const [summary, setSummary] = useState({ total: 0, malicious: 0, quarantined: 0, resolved: 0 });

  useEffect(() => {
    const fetchScanResults = async () => {
      try {
        const res = await api.get('/scan/history', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        const data = res.data;

        setThreatData(data.map(item => ({
          name: item.threat_type || 'Unknown',
          location: item.filename,
          risk: item.result === 'Malicious' ? 'High' : 'Low',
          status: item.status,
          color: item.result === 'Malicious' ? 'error' : 'success'
        })));

        setSummary({
          total: data.length,
          malicious: data.filter(d => d.result === 'Malicious').length,
          quarantined: data.filter(d => d.status === 'Quarantine or delete').length,
          resolved: data.filter(d => d.status === 'Safe to keep').length
        });
      } catch (err) {
        console.error('Failed to load scan results', err);
      }
    };

    fetchScanResults();
  }, []);

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Scan Results
        </Typography>

        {/* Summary Cards */}
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
            <Paper sx={{ p: 2, backgroundColor: '#fff8e1' }}>
              <Typography variant="body2">In Quarantine</Typography>
              <Typography variant="h5" color="warning.main">{summary.quarantined}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#e8f5e9' }}>
              <Typography variant="body2">Resolved</Typography>
              <Typography variant="h5" color="success.main">{summary.resolved}</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Table */}
        <Typography variant="subtitle1" gutterBottom>
          Detailed Results
        </Typography>
        <Paper sx={{ mb: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>Threat Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Risk Level</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {threatData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Chip label={row.name} color={row.color} />
                  </TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>
                    <Chip label={row.risk} color={row.risk === 'High' ? 'error' : row.risk === 'Medium' ? 'warning' : 'default'} />
                  </TableCell>
                  <TableCell>
                    <Chip label={row.status} color={row.status === 'Safe to keep' ? 'success' : 'warning'} />
                  </TableCell>
                  <TableCell>⋮</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        {/* Bulk Actions */}
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="contained" color="error">Delete Selected</Button>
          <Button variant="contained" color="warning">Quarantine Selected</Button>
        </Box>
      </Container>
    </Layout>
  );
}

export default AdminScanResult;
