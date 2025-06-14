'use client';

import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  Avatar,
  Skeleton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useLogin } from '../context/LoginContext';
import { useUser } from '../hooks/useUser.hook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

const ResponsiveAppBar = () => {
  const { user, loading, logout } = useUser();
  const { setOpenLogin } = useLogin();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleLogout = () => {
    logout();
    handleCloseUserMenu();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(61, 23, 1, 0.1)',
        zIndex: 10,
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href="/">
              <img
                src="/images/logos/logo-sst.png"
                alt="SST Academia Logo"
                style={{ width: '180px', height: 'auto' }}
              />
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Menú principal móvil */}
            {/* Logo Móvil */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, fontWeight: 'bold' }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src="/images/logos/sst-logo-mobile.png" alt="sst-logo-mobile" width={60} height={60} />
              </Link>
            </Box>
          </Box>

          {/* Botón "Acceder" siempre visible */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {loading ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : !user ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOpenLogin(true)}
                sx={{ fontWeight: 'bold', color: 'white', borderRadius: '6px' }}
              >
                Acceder
              </Button>
            ) : (
              <>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, display: 'flex', alignItems: 'center', gap: 0, cursor: 'pointer' }}
                >
                  <Avatar
                    alt={user.nombres}
                    src={user.fotoPerfil || undefined}
                    sx={{ width: 40, height: 40, cursor: 'pointer' }}
                  />
                  {Boolean(anchorElUser) ? (
                    <KeyboardArrowUpIcon sx={{ cursor: 'pointer', fontSize: '1rem' }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ cursor: 'pointer', fontSize: '1rem' }} />
                  )}
                </IconButton>
                <Menu
                  id="menu-user"
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  sx={{ marginTop: '40px' }}
                >
                  <Box sx={{ px: 2, py: 1.5 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {user.nombres || 'Usuario'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.correo}
                    </Typography>
                  </Box>

                  <MenuItem
                    component={Link}
                    href="/campus-virtual"
                    onClick={handleCloseUserMenu}
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(25, 118, 210, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>Campus virtual</Box>
                    <SchoolIcon fontSize="small" />
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    href="/dashboard/admin"
                    onClick={handleCloseUserMenu}
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(25, 118, 210, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>Dashboard Admin</Box>
                    <DashboardCustomizeIcon fontSize="small" />
                  </MenuItem>

                  <MenuItem
                    component={'div'}
                    onClick={handleLogout}
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(25, 118, 210, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>Cerrar sesión</Box>
                    <LogoutIcon fontSize="small" />
                  </MenuItem>

                  {/* <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem> */}
                </Menu>


              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
