import React from 'react';
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
  Pagination,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import TimelineIcon from '@mui/icons-material/Timeline';
import Layout from './Layout';
import ThreatTimeline from './ThreatTimeline'
const reportData = [
  {
    name: 'Trojan.Win32.Kovter',
    type: 'Trojan',
    location: 'C:\\Windows\\System32',
    status: 'Active',
  },
  {
    name: 'Adware.Win32.Elex',
    type: 'Adware',
    location: 'C:\\Program Files',
    status: 'Quarantined',
  },
  {
    name: 'Spyware.Win32.Zeus',
    type: 'Spyware',
    location: 'C:\\Users\\AppData',
    status: 'Blocked',
  },
];

const getChipColor = (status) => {
  switch (status) {
    case 'Active':
      return 'error';
    case 'Quarantined':
      return 'warning';
    case 'Blocked':
      return 'success';
    default:
      return 'default';
  }
};

const detectionTimeline = [
  { label: 'Trojan.Win32.Generic', time: '15 Mar, 14:30', color: 'error' },
  { label: 'Adware.Win32.Elex', time: '15 Mar, 14:10', color: 'warning' },
  { label: 'Spyware.Win32.Zeus', time: '14 Mar, 18:00', color: 'success' },
];

function AdminReports() {
  return (
    <Layout>
      <Container maxWidth="lg">
        {/* Summary Boxes */}
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
              <Typography variant="body2">Total Threats</Typography>
              <Typography variant="h5">1,247</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#e8f5e9' }}>
              <Typography variant="body2">Blocked</Typography>
              <Typography variant="h5">985</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#fffde7' }}>
              <Typography variant="body2">Quarantined</Typography>
              <Typography variant="h5">156</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, backgroundColor: '#ffebee' }}>
              <Typography variant="body2">Active Threats</Typography>
              <Typography variant="h5" color="error">106</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Timeline Section */}
       <ThreatTimeline />

        {/* Recent Threats Table */}
        <Typography variant="h6" gutterBottom>
          Recent Threats
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box>
            <Button startIcon={<FilterListIcon />} variant="outlined" size="small">
              Filter
            </Button>
          </Box>
          <Box>
            <Button variant="contained" size="small">Export Report</Button>
          </Box>
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
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
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

        {/* Pagination */}
        <Box display="flex" justifyContent="flex-end">
          <Pagination count={3} page={1} variant="outlined" shape="rounded" />
        </Box>

        {/* Return Button */}
        <Box mt={3}>
          <Button variant="contained" color="primary">Dashboard</Button>
        </Box>
      </Container>
    </Layout>
  );
}

export default AdminReports;
