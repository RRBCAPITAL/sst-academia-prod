'use client'

import { Grid, Box } from '@mui/material';
import PageContainer from './components/container/PageContainer';
// components
import RecentTransactions from './components/dashboard/RecentTransactions';
import ProductPerformance from './components/dashboard/ProductPerformance';
import Blog from './components/dashboard/Blog';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          {/* <Grid size={{ xs: 12, lg: 8}}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12}}>
                <YearlyBreakup />
              </Grid>
              <Grid size={{ xs: 12}}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid> */}
          <Grid size={{ xs: 12, lg: 4}}>
            <RecentTransactions />
          </Grid>
          <Grid size={{ xs: 12, lg: 8}}>
            <ProductPerformance />
          </Grid>
          <Grid size={{ xs: 12}}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
