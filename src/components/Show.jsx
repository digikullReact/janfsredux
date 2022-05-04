import React from 'react'

import { addItems ,deleteItem} from '../slices/todoslice'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';


import { useSelector,useDispatch } from 'react-redux';




const Show = () => {
    const data=useSelector(state=>state.todoslicec);
    const dispatch =useDispatch();

    const rows=data.items;

    // click handler
    const clickDelete=(params)=>{
      console.log(params.id);

      dispatch(deleteItem(params.id));

      //debugger;

    }


    const columns = [
      { field: 'task', headerName: 'Task', width: 70 },
      { field: 'date', headerName: 'Date', width: 130 },
     
      {field:'id' ,headerName:'Delete', renderCell:(params)=>{
        return <Button variant="contained" onClick={()=>clickDelete(params)}>
            Delete
        </Button>
  
      },width: 230}
     
    ];
  
  return (
    <Box sx={{ flexGrow: 1 }} >
    <Grid container spacing={6}>

    <Grid item xs={10}>

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