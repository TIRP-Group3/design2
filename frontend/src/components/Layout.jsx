import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Avatar,
  IconButton,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard' },
  { label: 'Detection', path: '/admin/detection' },
  { label: 'Upload Dataset', path: '/upload-dataset' },
  { label: 'Settings', path: '/admin/settings' },
  { label: 'Predictions', path: '/admin/predictions' },
];

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={4}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
              🛡 MalwareGuard
            </Typography>
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: 'primary.main' }}>AU</Avatar>
            <Typography variant="body2">Admin User</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>{children}</Container>
    </Box>
  );
};

export default Layout;
