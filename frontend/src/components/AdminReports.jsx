import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton,
  Pagination
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import Layout from './Layout';
import ThreatTimeline from './ThreatTimeline';
import api from '../api';

const getChipColor = (status) => {
  switch (status) {
    case 'Active': return 'error';
    case 'Quarantined': return 'warning';
    case 'Blocked': return 'success';
    default: return 'default';
  }
};

function AdminReports() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    api.get('/scan/scan-results')
      .then(res => setReportData(res.data))
      .catch(err => console.error("Failed to fetch scan results", err));
  }, []);

  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
              <Typography variant="body2">Total Threats</Typography>
              <Typography variant="h5">{reportData.length}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#e8f5e9' }}>
              <Typography variant="body2">Blocked</Typography>
              <Typography variant="h5">
                {reportData.filter(r => r.status === 'Blocked').length}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#fffde7' }}>
              <Typography variant="body2">Quarantined</Typography>
              <Typography variant="h5">
                {reportData.filter(r => r.status === 'Quarantined').length}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#ffebee' }}>
              <Typography variant="body2">Active Threats</Typography>
              <Typography variant="h5" color="error">
                {reportData.filter(r => r.status === 'Active').length}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Pass real scan data here */}
        <ThreatTimeline scanData={reportData} />

        <Typography variant="h6" gutterBottom>Recent Threats</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Button startIcon={<FilterListIcon />} variant="outlined" size="small">Filter</Button>
          <Button variant="contained" size="small">Export Report</Button>
        </Box>

        <Paper sx={{ mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Threat Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.threat_type}</TableCell>
                  <TableCell>{row.result}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>
                    <Chip label={row.status} color={getChipColor(row.status)} />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        <Box display="flex" justifyContent="flex-end">
          <Pagination count={1} page={1} variant="outlined" shape="rounded" />
        </Box>
      </Container>
    </Layout>
  );
}

export default AdminReports;
