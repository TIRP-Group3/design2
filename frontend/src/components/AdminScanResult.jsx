import React from 'react';
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

const threatData = [
  {
    name: 'Trojan.Win32.Generic',
    location: 'C:\\Windows\\System32\\infected.dll',
    risk: 'High',
    status: 'Quarantined',
    color: 'error',
  },
  {
    name: 'Spyware.Logger.KeySpy',
    location: 'C:\\Program Files\\Suspicious\\app.exe',
    risk: 'Medium',
    status: 'Resolved',
    color: 'warning',
  },
];

const threatDistribution = [
  { label: 'Trojans', percent: 45, color: 'error' },
  { label: 'Spyware', percent: 30, color: 'warning' },
  { label: 'Ransomware', percent: 15, color: 'info' },
  { label: 'Others', percent: 10, color: 'success' },
];

const detectionTimeline = [
  { label: 'Trojan.Win32.Generic', time: '15 Mar, 14:30', color: 'error' },
  { label: 'Spyware.Logger.KeySpy', time: '15 Mar, 14:28', color: 'warning' },
  { label: 'Ransomware.Cryptor', time: '15 Mar, 14:25', color: 'info' },
];

function AdminScanResult() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Scan Results
        </Typography>
        <Typography variant="body2" gutterBottom>
          Last scan completed on <strong>March 15, 2025 at 14:30</strong>
        </Typography>

        {/* Summary Cards */}
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
              <Typography variant="body2">Total Files Scanned</Typography>
              <Typography variant="h5">45,892</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#ffebee' }}>
              <Typography variant="body2">Threats Found</Typography>
              <Typography variant="h5" color="error">23</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#fff8e1' }}>
              <Typography variant="body2">In Quarantine</Typography>
              <Typography variant="h5" color="warning.main">18</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#e8f5e9' }}>
              <Typography variant="body2">Resolved</Typography>
              <Typography variant="h5" color="success.main">5</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Threat Distribution + Timeline */}
        <Grid container spacing={4} mb={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="subtitle1" gutterBottom>
              Threat Distribution
            </Typography>
            {threatDistribution.map((t, i) => (
              <Box key={i} mb={2}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">{t.label} ({t.percent}%)</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={t.percent}
                  color={t.color}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Detection Timeline
            </Typography>
            {detectionTimeline.map((item, idx) => (
              <Box key={idx} display="flex" alignItems="center" mb={1}>
                <Chip
                  size="small"
                  color={item.color}
                  sx={{ width: 10, height: 10, mr: 1 }}
                />
                <Typography variant="body2">{item.label}</Typography>
                <Typography variant="caption" sx={{ ml: 'auto' }}>{item.time}</Typography>
              </Box>
            ))}
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
                    <Chip label={row.status} color={row.status === 'Resolved' ? 'success' : 'warning'} />
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
