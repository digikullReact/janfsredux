import React from 'react'

import { addItems } from '../slices/todoslice'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';


import { useSelector } from 'react-redux';

const columns = [
    { field: 'task', headerName: 'Task', width: 70 },
    { field: 'date', headerName: 'Date', width: 130 },
   
   
  ];


const Show = () => {
    const data=useSelector(state=>state.todoslice);
    const rows=data.items;
  
  return (
    <Box sx={{ flexGrow: 1 }} >
    <Grid container spacing={3}>

    <Grid item xs={6}>

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
   
  </Grid>
     
     
     
    </Grid>
  </Box>
  )
}

export default Show