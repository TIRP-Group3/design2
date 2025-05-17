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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // TODO: Add registration logic
    navigate('/login');
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <PersonAddIcon />
          </Avatar>
          <Typography variant="h6">Create a MalwareGuard Account</Typography>

          <TextField fullWidth label="Full Name" margin="normal" />
          <TextField fullWidth label="Email Address" margin="normal" type="email" />
          <TextField fullWidth label="Password" margin="normal" type="password" />
          <TextField fullWidth label="Confirm Password" margin="normal" type="password" />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Button onClick={() => navigate('/login')} size="small">
              Login
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default RegisterForm;
