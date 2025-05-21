import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // Optional: clear previous session on mount
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', form);
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('role', user.role); // store role directly

      // Navigate based on role
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed.');
    }
  };

  return (
    <Container maxWidth="xs">

      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <LockIcon />
          </Avatar>
          <Typography variant="h6">Sign in to MalwareGuard</Typography>

          <Box display="flex" gap={1} width="100%">
            <Button
              variant="outlined"
              size="small"
              onClick={() => setForm({ email: 'admin@mail.com', password: 'admin123' })}
              fullWidth
            >
              Fill Admin
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setForm({ email: 'user1@mail.com', password: '123123123' })}
              fullWidth
            >
              Fill User
            </Button>
          </Box>

          <Button variant="text" sx={{ mt: 1 }} onClick={() => navigate('/public-scan')}>
            Or Scan Without Account →
          </Button>

          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account?{' '}
            <Button onClick={() => navigate('/register')} size="small">
              Register
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginForm;
