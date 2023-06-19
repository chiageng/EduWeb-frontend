import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { fontType } from '../design/font';
import { neural900 } from '../design/color';

export default function BasicRating({value}) {
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        size='small'
      />
      <Box sx={{ ml: 0, fontSize: '14px', fontFamily: fontType, color: neural900 }}>{value.toFixed(1)}</Box>
    </Box>
  );
}