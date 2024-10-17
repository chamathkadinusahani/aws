import React from 'react';
import { Box, Typography } from '@mui/material';

function AcademicInfo() {
  return (
    <Box p={2}>
      <Typography variant="h6">Academic Information</Typography>
      <Typography>Current Grade: A</Typography>
      <Typography>Subjects: Math, Science, History</Typography>
      <Typography>Exam Results: Excellent</Typography>
    </Box>
  );
}

export default AcademicInfo;