import React from 'react';
import Layout from './Layout';
import { Typography } from '@mui/material';

function AdminSettings() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Admin Settings
      </Typography>
      <Typography>This is the admin settings page.</Typography>
    </Layout>
  );
}

export default AdminSettings;
