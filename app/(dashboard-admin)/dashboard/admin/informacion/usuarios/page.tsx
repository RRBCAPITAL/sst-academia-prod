'use client';

import { Grid } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { useEffect, useState } from 'react';
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';
import TableUsers from '../../components/dashboard/TableUsers';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updateUser = (updatedUser: any) => {

    setUsuarios((prevUsuarios: any) =>
      prevUsuarios.map((user: any) =>
        user.user_id === updatedUser.user_id ? updatedUser : user
      )
    );
  };

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response: any = await apiClient.get<{ user: any }>('/users');

        setUsuarios(response.data.rows);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <PageContainer title="Shadow" description="this is Shadow">
      <DashboardCard >
        <Grid container spacing={2}>
          <TableUsers usuarios={usuarios} onUpdateUser={updateUser} />
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default Usuarios;
