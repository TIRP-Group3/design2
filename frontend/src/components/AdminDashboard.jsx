import React from 'react';
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
  Avatar,
  Container,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import AddIcon from '@mui/icons-material/Add';

const detectionData = [
  { name: 'filename1', value: 52.1 },
  { name: 'filename2', value: 22.8 },
  { name: 'filename3', value: 13.9 },
  { name: 'filename4', value: 11.2 },
];

const COLORS = ['#8884d8', '#8dd1e1', '#82ca9d', '#ffc658'];

function AdminDashboard() {
  return (
    <Layout>
      <Container maxWidth="xl">
        {/* Metric Cards */}
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body2">Clean Files</Typography>
              <Typography variant="h5">8,549 ✅</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body2">Detected Malware</Typography>
              <Typography variant="h5" color="error">246 ❌</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body2">Active Users</Typography>
              <Typography variant="h5">1,423 👥</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body2">Detection Rate</Typography>
              <Typography variant="h5" color="primary">97.8%</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Recent Detections + Analytics */}
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
                    <TableCell>Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>suspicious_file.exe</TableCell>
                    <TableCell>Executable</TableCell>
                    <TableCell><Chip label="Malicious" color="error" /></TableCell>
                    <TableCell>Jan 15, 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>document.pdf</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell><Chip label="Clean" color="success" /></TableCell>
                    <TableCell>Jan 15, 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>script.js</TableCell>
                    <TableCell>JavaScript</TableCell>
                    <TableCell><Chip label="Suspicious" color="warning" /></TableCell>
                    <TableCell>Jan 14, 2025</TableCell>
                  </TableRow>
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
                  <Select defaultValue="7d" label="Range">
                    <MenuItem value="7d">Last 7 days</MenuItem>
                    <MenuItem value="30d">Last 30 days</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={detectionData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label
                  >
                    {detectionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

        {/* Dataset Management */}
        <Typography variant="h6" gutterBottom>Dataset Management</Typography>
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography>📄 Malware Signatures</Typography>
              <Typography variant="body2">2.3 GB</Typography>
              <Typography variant="caption">Last updated: Jan 15, 2025</Typography>
              <Button size="small">Update</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography>💻 Train Dataset</Typography>
              <Typography variant="body2">1.8 GB</Typography>
              <Typography variant="caption">Last updated: Jan 14, 2025</Typography>
              <Button size="small">Update</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography>🛡️ Behavior Analysis</Typography>
              <Typography variant="body2">3.1 GB</Typography>
              <Typography variant="caption">Last updated: Jan 13, 2025</Typography>
              <Button size="small">Update</Button>
            </Paper>
          </Grid>
        </Grid>

        {/* User Management */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6">User Management</Typography>
          <Button variant="contained" startIcon={<AddIcon />}>Add User</Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar src="https://i.pravatar.cc/150?img=3" />
                  <Box>
                    <Typography>John Smith</Typography>
                    <Typography variant="caption">john@example.com</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>Administrator</TableCell>
              <TableCell><Chip label="Active" color="success" /></TableCell>
              <TableCell>2 minutes ago</TableCell>
              <TableCell>✏️ 🗑️</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar src="https://i.pravatar.cc/150?img=4" />
                  <Box>
                    <Typography>Sarah Johnson</Typography>
                    <Typography variant="caption">sarah@example.com</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>Analyst</TableCell>
              <TableCell><Chip label="Active" color="success" /></TableCell>
              <TableCell>1 hour ago</TableCell>
              <TableCell>✏️ 🗑️</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
    </Layout>
  );
}

export default AdminDashboard;
