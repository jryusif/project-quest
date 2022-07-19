import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/system';

const marks = [
  {
    value: 1,
    label: 'Strongly Disagree',
  },
  {
    value: 2,
    label: 'Disagree',
  },
  {
    value: 3,
    label: 'Neutral',
  },
  {
    value: 4,
    label: 'Agree',
  },
  {
  value: 5,
  label: 'Strongly Agree',
}
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderMarks({onChange}) {
    const [value, setValue] = useState(0)
    const theme = useTheme();
  return (
    <Box sx={{ width: 500 }}>
      <Slider
        aria-label="Custom marks"
        value = {value}
        getAriaValueText={valuetext}
        step={1}
        min={1}
        max={5}
        onChange = {(event,newValue) => {
        
          setValue(newValue);

        }}
        onChangeCommitted = {() => {
            //TODO : handle backend stuff
            
            setTimeout(() => {
              onChange();
              setValue(undefined);
              
            }, 300);
        }}
        marks={marks}
        
        sx={{
          color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
          height: 4,
          '& .MuiSlider-thumb': {
            width: 8,
            height: 8,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            '&:before': {
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 8px ${
                theme.palette.mode === 'dark'
                  ? 'rgb(255 255 255 / 16%)'
                  : 'rgb(0 0 0 / 16%)'
              }`,
            },
            '&.Mui-active': {
              width: 20,
              height: 20,
            },
          },
          '& .MuiSlider-rail': {
            opacity: 0.28,
          },
        }}

      />
    </Box>
  );
}
