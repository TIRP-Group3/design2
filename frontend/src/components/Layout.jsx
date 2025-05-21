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

const allNavItems = [
  { label: 'Dashboard', path: '/admin/dashboard', adminOnly: false },
  { label: 'Predictions', path: '/admin/predictions', adminOnly: false },
  { label: 'Detection', path: '/admin/detection', adminOnly: true },
  { label: 'Upload Dataset', path: '/upload-dataset', adminOnly: true },
  { label: 'Settings', path: '/admin/settings', adminOnly: true },
];

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const userRole = localStorage.getItem('role') || 'client'; // fallback to 'client'

  const filteredNavItems = allNavItems.filter(
    (item) => !item.adminOnly || userRole === 'admin'
  );

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear(); // optional: clear auth token, role, etc.
    handleCloseMenu();
    navigate('/login');
  };

  return (
    <Box>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={4}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
              🛡 MalwareGuard
            </Typography>
            {filteredNavItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  color:
                    location.pathname === item.path
                      ? 'primary.main'
                      : 'text.primary',
                  fontWeight:
                    location.pathname === item.path ? 'bold' : 'normal',
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
            <Box>
              <IconButton onClick={handleAvatarClick}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  {userRole[0].toUpperCase()}
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem disabled>{userRole.charAt(0).toUpperCase() + userRole.slice(1)} User</MenuItem>
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
