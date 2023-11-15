import { Box, Button, Chip, Divider, Paper } from '@mui/material'
import React from 'react'

function JobCard({job}) {

  
  return (
   <Paper elevation={4} 
   style={{
    display:"flex",
    height:"350px",
    flexDirection:"column",
    justifyContent:"space-between"}}>
    <Box style={{margin:"1rem"}}>
        <h3 >{job.city} : {job.title}</h3>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          
        {job.skills?.slice(0,4).map(skill=> {
          return (<Chip label={skill} />)
        })}

        </div>
        <Divider />
        <p>Salary Range: ${job.salaryLow} - ${job.salaryHigh}</p>
        <p>Job Description: {job.description}</p>
    </Box>
    <Button style={{ width:"100%"}} variant="contained">Apply</Button>
   </Paper>
  )
}

export default JobCard