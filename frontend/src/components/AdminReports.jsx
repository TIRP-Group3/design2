import React from 'react';
import Layout from './Layout';
import { Typography } from '@mui/material';

function AdminReports() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Admin Reports
      </Typography>
      <Typography>This is the admin reports page.</Typography>
    </Layout>
  );
}

export default AdminReports;
