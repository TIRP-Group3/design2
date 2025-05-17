import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import Layout from './Layout';

const users = [
  {
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Administrator',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'Analyst',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    name: 'Alex Carter',
    email: 'alex@example.com',
    role: 'Viewer',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

const AdminSettings = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h6">User Management</Typography>
          <Button variant="contained" startIcon={<Add />}>
            Add User
          </Button>
        </Box>

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar src={user.avatar} />
                      <Typography>{user.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.status}
                      color={user.status === 'Active' ? 'success' : 'default'}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton color="error">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Layout>
  );
};

export default AdminSettings;
