import React from 'react';
import { StepIconProps } from '@mui/material/StepIcon';

const CustomStepIcon = React.memo(({ icon, active, completed }: StepIconProps) => {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        backgroundColor: active ? '#FF914D' : completed ? '#FF914D' : '#e0e0e0',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </div>
  );
});

CustomStepIcon.displayName = "CustomStepIcon";

export default CustomStepIcon;