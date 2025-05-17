import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Grid
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Layout from './Layout';

function AdminPrediction() {
  const [scanHistory, setScanHistory] = useState([
    {
      filename: 'file1.exe',
      type: 'Executable',
      result: 'Malicious',
      date: 'May 17, 2025'
    },
    {
      filename: 'invoice.pdf',
      type: 'PDF',
      result: 'Clean',
      date: 'May 16, 2025'
    },
    {
      filename: 'script.js',
      type: 'JavaScript',
      result: 'Suspicious',
      date: 'May 15, 2025'
    }
  ]);

  const getChipColor = (result) => {
    switch (result) {
      case 'Malicious':
        return 'error';
      case 'Suspicious':
        return 'warning';
      case 'Clean':
      default:
        return 'success';
    }
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        {/* Upload Section */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Upload File or Folder for Prediction
          </Typography>
          <Box
            sx={{
              border: '2px dashed #90caf9',
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              backgroundColor: '#f5faff',
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 50, color: '#2196f3' }} />
            <Typography mt={2}>Drag and drop your files or folders here</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Browse
            </Button>
            <Typography variant="caption" display="block" mt={1}>
              Supported formats: .exe, .pdf, .js, .docx, etc.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button variant="contained" color="primary">
              Scan for Malware
            </Button>
          </Box>
        </Paper>

        {/* History Section */}
        <Typography variant="h6" gutterBottom>
          Scan History
        </Typography>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>File Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Result</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scanHistory.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.filename}</TableCell>
                  <TableCell>{entry.type}</TableCell>
                  <TableCell>
                    <Chip label={entry.result} color={getChipColor(entry.result)} />
                  </TableCell>
                  <TableCell>{entry.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Layout>
  );
}

export default AdminPrediction;
