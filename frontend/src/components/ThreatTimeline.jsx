import React, { useState } from 'react';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from '@mui/material';
import { LineChart, axisClasses } from '@mui/x-charts';

const dailyData = [1, 2, 6, 4];
const weeklyData = [3, 5, 12, 4, 7, 5, 6];
const monthlyData = [20, 35, 28, 40];

const labels = {
  daily: ['00:00', '06:00', '12:00', '18:00'],
  weekly: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  monthly: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
};

const ThreatTimeline = () => {
  const [view, setView] = useState('weekly');

  const handleChange = (_, nextView) => {
    if (nextView) setView(nextView);
  };

  const data = view === 'daily' ? dailyData : view === 'monthly' ? monthlyData : weeklyData;
  const xLabels = labels[view];

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
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          [`& .${axisClasses.left} .MuiTypography-root`]: { fontSize: 12 },
          [`& .${axisClasses.bottom} .MuiTypography-root`]: { fontSize: 12 },
        }}
      />
    </Paper>
  );
};

export default ThreatTimeline;
