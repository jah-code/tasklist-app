import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './style.css'

export default function CircularIndeterminate() {
  return (
      <div className="loader valign-wrapper">
        <Box sx={{ display: 'flex' }}>
        <CircularProgress />
        </Box>
      </div>
  );
}