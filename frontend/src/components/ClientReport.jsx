import React from 'react';
import Layout from './Layout';
import { Typography } from '@mui/material';

function ClientReport() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Client Report
      </Typography>
      <Typography>This is the client report page.</Typography>
    </Layout>
  );
}

export default ClientReport;
