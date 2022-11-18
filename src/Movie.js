
import Counter from "./Counter"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from "react";
import Toggle from "./ToggleSummary";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    height:32,
    marginLeft: '0.3rem',
    scrollMarginRight: '0.3rem',
    color: theme.palette.text.secondary,
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'auto',
    margin: '1rem',
    color: theme.palette.text.secondary,
  }));

  const Item3 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'auto',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    color: theme.palette.text.secondary,
  }));

  const Item4 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'fit-content',
    width:'16rem',
    display:'flex',
    justifyContent:'center',
    color: theme.palette.text.secondary,
  }));


export default function Movie({movie}){


    return(
        <div className="movie-container">
            <div className="movie-poster-main">
                <Item4>
                <img className="movie-poster" src={movie.poster} alt={movie.name}></img> 
                </Item4>
               
            </div>            
            <div className="movie-heading">
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
          <Item3><h3>{movie.name}</h3><p>⭐{movie.rating}</p></Item3>
            </Grid>              
            </Grid>

            </Box>
                
                
            </div>
            <div className="counter+button">

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item><Counter /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Toggle /></Item>
        </Grid>       
      </Grid>
    </Box>           
           
            </div>           
            <div className="movie-summary">
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
          <Item2>{movie.summary}</Item2>
        </Grid>                
            </Grid>

            </Box>
               
            </div>
        </div>
    )
}