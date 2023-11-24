import React from 'react'
import './App.css';
import PrimarySearchAppBar from './components/AppBar';
import { Box, Container, Grid, createTheme } from '@mui/material';
import jobs from "./jobs.json"
import JobCard from './components/JobCard';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider } from '@emotion/react';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});


function App() {
  
  return(
  <ThemeProvider theme={theme}>
    <Box style={{background:"black"}}>
    <PrimarySearchAppBar/>
    <Container style={{background:"black"}} maxWidth="lg">
      <Grid style={{marginTop:"1rem",display: "flex"}} container spacing={2}>
        {jobs?.map(job=> (
        <Grid  key={job.id} item xs={12} md={4}>
          <JobCard job={job}/>
        </Grid>
        ))}
      </Grid>
      <Grid style={{marginTop:"1rem",display:'flex', justifyContent:"center"}} item xs={12} md={12}>
        <Pagination 
        style={{color:"black",width:"100%", justifyContent:"center",display:"flex"}} 
        count={10}  
        
        color="secondary" />
      </Grid>
    </Container>

    </Box>
 

</ThemeProvider>
   
  );
}

export default App;
