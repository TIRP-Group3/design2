// ✅ ThreatTimeline.jsx (optimized)
import React, { useState } from 'react';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from '@mui/material';
import { LineChart, axisClasses } from '@mui/x-charts';

const ThreatTimeline = ({ scanData }) => {
  const [view, setView] = useState('weekly');

  const handleChange = (_, nextView) => {
    if (nextView) setView(nextView);
  };

  const getAggregatedData = (viewType) => {
    const buckets = {};

    scanData.forEach(entry => {
      const date = new Date(entry.scanned_at);
      let key;

      if (viewType === 'daily') {
        key = `${date.getHours()}:00`;
      } else if (viewType === 'weekly') {
        key = date.toLocaleDateString('en-US', { weekday: 'short' });
      } else if (viewType === 'monthly') {
        key = `Week ${Math.ceil(date.getDate() / 7)}`;
      }

      buckets[key] = (buckets[key] || 0) + 1;
    });

    const sortedKeys = Object.keys(buckets).sort((a, b) => a.localeCompare(b));

    return {
      labels: sortedKeys,
      data: sortedKeys.map(k => buckets[k])
    };
  };

  const { data, labels } = getAggregatedData(view);

  return (
    <Paper sx={{ p: 3, mb: 4, backgroundColor: '#f9f9f9' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Threat Detection Timeline</Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleChange}
          size="small"
        >
          <ToggleButton value="daily">Daily</ToggleButton>
          <ToggleButton value="weekly">Weekly</ToggleButton>
          <ToggleButton value="monthly">Monthly</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <LineChart
        height={300}
        series={[{ data, label: 'Threats', type: 'line' }]}
        xAxis={[{ scaleType: 'point', data: labels }]}
        sx={{
          [`& .${axisClasses.left} .MuiTypography-root`]: { fontSize: 12 },
          [`& .${axisClasses.bottom} .MuiTypography-root`]: { fontSize: 12 },
        }}
      />
    </Paper>
  );
};

export default ThreatTimeline;
