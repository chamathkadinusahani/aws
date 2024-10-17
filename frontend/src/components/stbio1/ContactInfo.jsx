import React from 'react';
import { Box, Typography } from '@mui/material';

function ContactInfo() {
  return (
    <Box p={2}>
      <Typography variant="h6">Contact Information</Typography>
      <Typography>Email: kasun@example.com</Typography>
      <Typography>Phone: 071123123</Typography>
      <Typography>Address: 123 Main St, City</Typography>
    </Box>
  );
}

export default ContactInfo;

