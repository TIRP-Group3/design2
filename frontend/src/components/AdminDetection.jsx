import React from 'react';
import Layout from './Layout';
import { Typography } from '@mui/material';

function AdminDetection() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Admin Detection
      </Typography>
      <Typography>This is the admin detection page.</Typography>
    </Layout>
  );
}

export default AdminDetection;
