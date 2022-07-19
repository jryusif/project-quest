import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate({titles, progress}) {
   

  return (

    <Box sx={{ width: '100%', display:"flex", justifyContent:"space-between"  }}>
      {titles.map( (title, index) => (
        <Box sx={{ display:"flex", flexDirection:"column", width:"100%"}} >

      <LinearProgress variant="determinate" value={progress-index*100 > 100? 100 : progress- index*100 } />
      {title}
       </Box>)

      )}
    </Box>
  );
}
