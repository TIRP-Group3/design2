import React from 'react';
import Layout from './Layout';
import { Typography } from '@mui/material';

function AdminPrediction() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Admin Prediction
      </Typography>
      <Typography>This is the admin prediction page.</Typography>
    </Layout>
  );
}

export default AdminPrediction;
