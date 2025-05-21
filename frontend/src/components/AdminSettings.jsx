// ✅ AdminSettings.jsx — functional with real data and no admin checks
import React, { useEffect, useState } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import Layout from './Layout';
import api from '../api';

const ROLES = ['admin', 'client'];
const STATUSES = ['Active', 'Inactive'];

const AdminSettings = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await api.get('/users/');
      setUsers(res.data);
    } catch (err) {
      console.error('Failed to fetch users', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOpen = (user = null) => {
    setEditingUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setEditingUser(null);
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      if (editingUser.id) {
        await api.put(`/users/${editingUser.id}`, editingUser);
      } else {
        await api.post('/users/', editingUser);
      }
      fetchUsers();
      handleClose();
    } catch (err) {
      alert('Save failed');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await api.delete(`/users/${id}`);
      fetchUsers();
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h6">User Management</Typography>
          <Button variant="contained" startIcon={<Add />} onClick={() => handleOpen({ name: '', email: '', password: '', role: 'Viewer', status: 'Active' })}>
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
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar>{user.name[0]}</Avatar>
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
                    <IconButton color="primary" onClick={() => handleOpen(user)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(user.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle>{editingUser?.id ? 'Edit User' : 'Add User'}</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField label="Name" value={editingUser?.name || ''} onChange={e => setEditingUser({ ...editingUser, name: e.target.value })} />
            <TextField label="Email" value={editingUser?.email || ''} onChange={e => setEditingUser({ ...editingUser, email: e.target.value })} />
            {!editingUser?.id && (
              <TextField label="Password" type="password" value={editingUser?.password || ''} onChange={e => setEditingUser({ ...editingUser, password: e.target.value })} />
            )}
            <TextField select label="Role" value={editingUser?.role || ''} onChange={e => setEditingUser({ ...editingUser, role: e.target.value })}>
              {ROLES.map(r => <MenuItem key={r} value={r}>{r}</MenuItem>)}
            </TextField>
            <TextField select label="Status" value={editingUser?.status || ''} onChange={e => setEditingUser({ ...editingUser, status: e.target.value })}>
              {STATUSES.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained">Save</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Layout>
  );
};

export default AdminSettings;
