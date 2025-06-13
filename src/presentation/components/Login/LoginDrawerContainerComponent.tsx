'use client';

import { useState } from 'react';
import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import PasswordStep from './LoginCurrentStudent.component';
import { UserInterface } from '../../interfaces/user.interface';
import RegisterStep from './LoginNewStudent.component';
import { useLogin } from '../../context/LoginContext';
import LoginDrawerPrincipal from './LoginDrawerPrincipalComponent';

export default function LoginDrawerContainer() {
  const { openLogin, setOpenLogin } = useLogin();
  const [student, setStudent] = useState<UserInterface | null>(null);
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <LoginDrawerPrincipal
            setOpenLogin={setOpenLogin}
            openLogin={openLogin}
            setStudent={setStudent}
            email={email}
            setEmail={setEmail}
            setStep={setStep}
          />
        );
      case 1:
        if (student) {
          return (
            <PasswordStep
              setOpenLogin={setOpenLogin}
              nombres={student.nombres.split(' ')[0]}
              email={email}
              setStep={setStep}
            />
          );
        }
        return null;
      case 2:
        return <RegisterStep
          setOpenLogin={setOpenLogin}
          email={email}
          setStep={setStep}
        />
      // return <OtroPaso email={email} setStep={setStep} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Drawer
        anchor={isMobile ? "bottom" : "right"}
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        PaperProps={{
          sx: {
            width: isMobile ? '100%' : 360,
            height: isMobile ? '80%' : '100%',
            backgroundColor: '#F6F6F6',
            color: 'white',
            p: 2,
            right: 0,
            position: 'fixed',
          },
        }}
      >
        {renderStep()}
      </Drawer></Box>
  )

}
