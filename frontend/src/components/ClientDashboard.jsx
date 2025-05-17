import React from 'react';
import Layout from './Layout';
import { Typography } from '@mui/material';

function ClientDashboard() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Client Dashboard
      </Typography>
      <Typography>This is the client dashboard page.</Typography>
    </Layout>
  );
}

export default ClientDashboard;
