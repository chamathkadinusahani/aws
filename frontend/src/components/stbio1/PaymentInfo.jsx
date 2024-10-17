import React from 'react';
import { Box, Typography } from '@mui/material';

function PaymentInfo() {
  return (
    <Box p={2}>
      <Typography variant="h6">Payment Information</Typography>
      <Typography>Fees Paid: $5000</Typography>
      <Typography>Outstanding Balance: $1000</Typography>
      <Typography>Payment Method: Bank Transfer</Typography>
    </Box>
  );
}

export default PaymentInfo;
