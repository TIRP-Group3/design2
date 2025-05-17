import React from 'react';
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

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Add real login logic
    navigate('/admin/dashboard');
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <LockIcon />
          </Avatar>
          <Typography variant="h6">Sign in to MalwareGuard</Typography>

          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            type="email"
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            type="password"
          />

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
