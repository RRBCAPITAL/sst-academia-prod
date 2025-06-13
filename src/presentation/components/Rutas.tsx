"use client";

import React from 'react';
import { usePathname } from "next/navigation";
import { Box, Typography, Link as MuiLink } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { deslugify } from '../utils/deslugify';
import NextLink from 'next/link';

const Rutas = (props: { cursoNombre: string | null }) => {
    const pathname = usePathname();

    const renderPath = () => {
        const pathSegments = pathname?.split('/').filter(Boolean);
        const lastSegment = pathSegments ? pathSegments[pathSegments.length - 1] : '';

        return (
            <>

                {pathSegments?.includes('cursos-virtuales') ? (
                    <>
                        <MuiLink component={NextLink} href="/" color="inherit" sx={{ color: '#737373', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <HomeIcon fontSize="small" />
                        </MuiLink>
                        {/* <ArrowForwardIosIcon fontSize="small" sx={{ marginLeft: 1, marginRight: 1, width: '12px', color: '#737373', }} />
                        <MuiLink component={NextLink} href="/" color="inherit" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" component="span" sx={{ color: '#737373', fontWeight: 'bold', fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                Especializaciones
                            </Typography>
                        </MuiLink> */}
                        {lastSegment !== 'cursos-virtuales' && (
                            <>
                                <ArrowForwardIosIcon fontSize="small" sx={{ marginLeft: 1, marginRight: 1, width: '12px', color: '#737373', }} />
                                <Typography variant="body1" component="span" sx={{ color: '#737373', fontWeight: 'bold', fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                    {props.cursoNombre}
                                </Typography>
                            </>
                        )}
                    </>
                ) : pathSegments?.includes('packs') ? (
                    <>
                        <MuiLink component={NextLink} href="/" color="inherit" sx={{ color: '#737373', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <HomeIcon fontSize="small" />
                        </MuiLink>
                        <ArrowForwardIosIcon fontSize="small" sx={{ marginLeft: 1, marginRight: 1, width: '12px', color: '#737373', }} />
                        <MuiLink component={NextLink} href="/" color="inherit" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" component="span" sx={{ color: '#737373', fontWeight: 'bold', fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                MegaPacks
                            </Typography>
                        </MuiLink>
                        {lastSegment !== 'cursos-virtuales' && (
                            <>
                                <ArrowForwardIosIcon fontSize="small" sx={{ marginLeft: 1, marginRight: 1, width: '12px', color: '#737373', }} />
                                <Typography variant="body1" component="span" sx={{ color: '#737373', fontWeight: 'bold', fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                    {deslugify(lastSegment)}
                                </Typography>
                            </>
                        )}
                    </>
                ) : ''}
            </>
        );
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', margin: {
            xs: '20px 10px',
            md: '20px 30px'
        }}}>
            {renderPath()}
        </Box>
    );
};

export default Rutas;
