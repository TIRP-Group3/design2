import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard' },
  { label: 'Predictions', path: '/admin/predictions' },
  { label: 'Detection', path: '/admin/detection' },
  { label: 'Upload Dataset', path: '/upload-dataset' },
  { label: 'Settings', path: '/admin/settings' },
];

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // TODO: add your logout logic here
    handleCloseMenu();
    navigate('/login');
  };

  return (
    <Box>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left nav */}
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

          {/* Right profile section */}
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Box>
              <IconButton onClick={handleAvatarClick}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>AU</Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem disabled>Admin User</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>{children}</Container>
    </Box>
  );
};

export default Layout;
