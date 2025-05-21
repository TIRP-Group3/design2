// ✅ AdminDashboard.jsx (lightweight API version)
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import api from '../api';

const COLORS = ['#8884d8', '#8dd1e1', '#82ca9d', '#ffc658'];

function AdminDashboard() {
  const [metrics, setMetrics] = useState({
    total: 0,
    clean: 0,
    malware: 0,
    rate: 0,
    topThreats: [],
    recent: []
  });
  const [range, setRange] = useState('7d');

  useEffect(() => {
    api.get('/scan/dashboard-summary')
      .then(res => setMetrics(res.data))
      .catch(err => console.error('Failed to fetch dashboard summary', err));
  }, []);

  return (
    <Layout>
      <Container maxWidth="xl">
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body2">Clean Files</Typography>
              <Typography variant="h5">{metrics.clean} ✅</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body2">Detected Malware</Typography>
              <Typography variant="h5" color="error">{metrics.malware} ❌</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body2">Scan Records</Typography>
              <Typography variant="h5">{metrics.total} 📊</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body2">Detection Rate</Typography>
              <Typography variant="h5" color="primary">{metrics.rate.toFixed(1)}%</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="h6">Recent Detections</Typography>
                <Button size="small">View All</Button>
              </Box>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>File Name</TableCell>
                    <TableCell>Malware Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {metrics.recent.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.filename}</TableCell>
                      <TableCell>{row.threat_type || 'Unknown'}</TableCell>
                      <TableCell>
                        <Chip label={row.result === 'benign' ? 'Clean' : 'Malicious'}
                              color={row.result === 'benign' ? 'success' : 'error'} />
                      </TableCell>
                      <TableCell>{new Date(row.scanned_at).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Detection Analytics</Typography>
                <FormControl size="small">
                  <InputLabel>Range</InputLabel>
                  <Select value={range} label="Range" onChange={e => setRange(e.target.value)}>
                    <MenuItem value="7d">Last 7 days</MenuItem>
                    <MenuItem value="30d">Last 30 days</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={metrics.topThreats}
                    dataKey="count"
                    nameKey="threat"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label
                  >
                    {metrics.topThreats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default AdminDashboard;
