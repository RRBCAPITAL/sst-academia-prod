"use client"

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from 'next/link';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CampusVirtualInicio from './CampusVirtualInicio';
import { usePathname, useRouter } from 'next/navigation';
import CampusVirtualCurso from './CampusVirtualCurso';
import { useUser } from '../../hooks/useUser.hook';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCurso } from '@/src/application/context/CursoContext';

const drawerWidth = 240;

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile',
})<{
  open?: boolean;
  isMobile?: boolean;
}>(({ theme, open, isMobile }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: isMobile ? 0 : open ? 0 : `-${drawerWidth}px`,
}));


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile',
})<AppBarProps & { isMobile?: boolean }>(({ theme, open, isMobile }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && !isMobile && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function CampusVirtualSidebar(props: any) {
  const { user, logout } = useUser();
  const { cursoSeleccionado } = useCurso();
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const frasesDinamicas = ['Bienvenido al campus virtual', 'Hoy es un gran día para aprender.', "Felices de ayudarte a crecer.", "Recuerda repasar lo que aprendas.", "Mucha suerte con tus clases hoy."]

  // Estado para almacenar el índice de la frase actual
  const [currentFraseIndex, setCurrentFraseIndex] = React.useState(0);

  React.useEffect(() => {
    // Intervalo para cambiar la frase cada 3 segundos
    const interval = setInterval(() => {
      setCurrentFraseIndex((prevIndex) =>
        prevIndex === frasesDinamicas.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    // { text: 'Mi perfil', url: '/' },
    { text: 'Cursos Activos', url: '/campus-virtual' },
    // { text: 'Cursos Finalizados', url: '/campus-virtual/cursos-finalizados' },
    // { text: 'Mi Progreso', url: '/progreso' },
    { text: 'Cerrar Sesión', url: '/campus-virtual-login' },
  ];

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} isMobile={isMobile} sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexGrow: 0 }}>
            <Link href="/campus-virtual" passHref>
              <img
                src="/images/logos/logo-sst.png" // Ruta a la imagen de tu logo
                alt="SST Academia Logo"
                style={{
                  display: 'block',
                  width: '180px', // Ajusta el tamaño según sea necesario
                  height: 'auto',
                }}
              />
            </Link>
            {" "}Campus Virtual
          </Box>
        </Toolbar>

        <Box
          sx={{
            display: 'flex', // Para habilitar flexbox
            flexDirection: 'column',
            justifyContent: 'center', // Centrado horizontal
            alignItems: 'center', // Centrado vertical
            background: '#ff914d',
            width: '100%',
            textAlign: 'center',
            fontSize: {
              xs: '1.2rem',
              md: '1.5rem',
              lg: '2rem'
            },
            color: 'white',
            fontWeight: 'bold',
            overflowX: 'hidden',
            margin: '0',
            marginTop: '14px',
            padding: {
              xs: '20px',
              md: '40px',
            }
          }}
        >
          {typeof window !== 'undefined' && (
          <Typography sx={{
            width: '100%',
            textAlign: 'center',
            fontSize: {
              xs: '1.3rem',
              md: '2rem',
            },
            color: 'white',
            fontWeight: 'bold',
            margin: '0',
            padding: '0',
            lineHeight: '1.4'
          }}>
            {pathname === '/campus-virtual' ? `¡Hola ${user?.nombres?.split(' ')[0] || 'estudiante'}!` : `${cursoSeleccionado ? cursoSeleccionado.nombre : "Cargando..."}`}
          </Typography>
          )}
          {
            pathname === '/campus-virtual' && <Typography sx={{
              width: '100%',
              textAlign: 'center',
              fontSize: {
                xs: '1rem',
                md: '1.5rem',
              },
              color: 'white',
              //fontWeight: '500',
              margin: '0',
              marginTop: {
                xs: '8px',
                md: '12px'
              },
              padding: '0'
            }}>
              {frasesDinamicas[currentFraseIndex]}
            </Typography>
          }
        </Box>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={open}
        onClose={handleDrawerClose} // necesario para cerrar en móvil
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
  {menuItems.map((item, index) => {
    const isLogout = item.text === 'Cerrar Sesión';

    const isSelected =
      (pathname === item.url) ||
      (item.url === '/campus-virtual' && pathname?.startsWith('/campus-virtual/curso/'));

    return (
      <ListItem key={item.text} disablePadding>
        <Box
          component={isLogout ? 'div' : Link}
          {...(!isLogout ? { href: item.url } : {})}
          onClick={() => {
            if (isLogout) {
              handleLogout();
            }
            if (isMobile) handleDrawerClose();
          }}
          sx={{
            background: isSelected ? '#ff914d' : '#ffffff',
            border: '2px solid #e4721a',
            borderRadius: '10px',
            margin: '4px 8px',
            width: '100%',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: '0.3s',
         '&:hover': {
              backgroundColor: '#ffa768',
              borderColor: '#ff7017',
            },
          }}
        >
          <ListItemButton sx={{
    '&:hover': {
      backgroundColor: 'transparent', // 🔥 Anula el gris feo
    },
  }}>
            <ListItemIcon sx={{ color: isSelected ? 'white' : '#ff7017' }}>
              {isLogout ? <LogoutIcon /> : <AppRegistrationIcon />}
            </ListItemIcon>
            <Typography sx={{
              fontWeight: 'bold',
              fontSize: '0.8rem',
              color: isSelected ? 'white' : 'black',
            }}>
              {item.text}
            </Typography>
          </ListItemButton>
        </Box>
      </ListItem>
    );
  })}
</List>

        <Divider />
      </Drawer>

      <Main open={open} isMobile={isMobile}>
        {pathname === '/campus-virtual' ? <CampusVirtualInicio /> : pathname?.startsWith('/campus-virtual/curso') ? <CampusVirtualCurso curso_id={props && props?.curso_id} /> : ''}
      </Main>
    </Box>
  );
}
