import React from 'react';
import Layout from './Layout';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function LoginForm() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4">Login</Typography>
          <TextField label="Username" variant="outlined" fullWidth />
          <TextField label="Password" variant="outlined" type="password" fullWidth />
          <Button variant="contained" color="primary">Login</Button>
        </Box>
      </Container>
    </Layout>
  );
}

export default LoginForm;
