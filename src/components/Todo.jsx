import React ,{useEffect}from 'react'
import { addItems } from '../slices/todoslice'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import uuid from 'react-uuid'

import { useDispatch,useSelector } from 'react-redux';
import Show from './Show';
import { toDo ,getTodo} from '../thunks/todo';







const Todo = () => {

  const dataTodo=useSelector(state=>state)

  const [value, setValue] = React.useState({
    task:"",
    date:""
  });

  const dispatch=useDispatch();


  const handleChange=(event)=>{
    setValue({...value,[event.target.name]:event.target.value})

  }


  useEffect(()=>{

     debugger;

    dispatch(getTodo())

  },[])

  const buttonClick=()=>{
    //console.log(value);

    //
    value.id=uuid();
    dispatch(addItems(value))  // we are sending the data from here --->

  }
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:"200px"}}>
    <Grid container spacing={3}>

      <h1>
        {dataTodo.obj.title}
      </h1>

    <Grid item xs={6}>
    <TextField id="outlined-basic" onChange={handleChange} name="task" label="Task" variant="outlined" style={{width:"260px"}} /> <br/>

    
    <TextField id="outlined-basic" onChange={handleChange} name="date" label="Date" variant="outlined"  style={{marginTop:"30px",width:"260px"}}/><br/> 
    <Button variant="contained"  onClick={buttonClick} style={{marginTop:"30px",width:"160px"}}>Add To Do</Button>
  </Grid>
     
      <Grid item xs={6}>
     
     <Show/>

      </Grid>
     
    </Grid>
  </Box>
  )
}

export default Todo