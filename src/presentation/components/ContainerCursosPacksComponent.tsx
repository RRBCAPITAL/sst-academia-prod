import React from 'react';
import CursosComponent from './Cursos/CursosComponent';
import { Container, Box, Typography, Stack } from '@mui/material';
import PacksComponent from './Packs/PacksComponent';
import CardGiftcardOutlined from '@mui/icons-material/CardGiftcardOutlined';

const CardsCursosPacksComponent: React.FC = () => {
  return (
    <Container sx={{
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      maxWidth: {
        sm: '768px',
        md: '968px',
        lg: '1440px'
    },
    }}>
      
      <Box sx={{ padding: 0}}>
        <CursosComponent />
        <Stack direction="row" alignItems="center" spacing={1} sx={{ margin: '30px 0' }}>
          <CardGiftcardOutlined sx={{ fontSize: '2.5rem', color: '#FF914D' }} />
          <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF914D' }}>
            MegaPacks
          </Typography>
        </Stack>
        <PacksComponent />
      </Box>
    </Container>
  );
};

export default CardsCursosPacksComponent;
