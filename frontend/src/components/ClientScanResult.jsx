import React from 'react';
import Layout from './Layout';
import { Typography } from '@mui/material';

function ClientScanResult() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Client ScanResult
      </Typography>
      <Typography>This is the client scanresult page.</Typography>
    </Layout>
  );
}

export default ClientScanResult;
