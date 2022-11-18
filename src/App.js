import './App.css';
import MovieList from './Movielist';
import { useState, useEffect } from 'react';
import Add from './Addmovie';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { redirect } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TicTacToe from './TicTacToe';





const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




function App() {
  const [movies,setData] = useState([
    {
      name: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers."
    },
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    }
  ])
  const [newmovies, setMovies] = useState([])

  const newestmovies = movies.concat(newmovies)

  useEffect(()=>{
    fetch("https://632464475c1b435727a76571.mockapi.io/movies")
    .then(data=>data.json())
    .then(response=>{setMovies(response)})
    
  },[])

  const [search, setSearch] = useState("")

  const navigate = useNavigate();





  return (
    
    
      <ThemeProvider theme={lightTheme}>
      <Box>
      <Item>
      <div className='App'>
          <AppBar position="static">
           <Toolbar>
            <Button size="large"
              edge="start"
              color="inherit" onClick={()=>navigate("/")}>Home</Button>
            <Button size="large"
              edge="start"
              color="inherit" onClick={()=>navigate("/movies")}>Movies</Button>
            <Button size="large"
              edge="start"
              color="inherit" onClick={()=>navigate("/addmovie")}>Add Movie</Button>
            <Button size="large"
              edge="start"
              color="inherit" onClick={()=>navigate("/tictactoe")}>TicTacToe</Button>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            </Toolbar>
          </AppBar>
          <>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/films' element={<Navigate replace to="/movies"/>} />
              <Route path='/movies' element={<MovieList movies={newestmovies}/>} />
              <Route path='/addmovie' element={<Add />} />
              <Route path='/tictactoe' element={<TicTacToe />}/>
              <Route path="/404" element={<NotFound />}/>
              <Route path="*" element={<Navigate replace to="/404"/>}/>

            </Routes>     
          </>
         </div>
      </Item>
      </Box>
      </ThemeProvider>
    
  );
}

function Home(){
  return(
    <div>
      this is home page
    </div>
  )
}

function About(){
  return(
    <div>
      About this webapp - this is a webapp which has movies
    </div>
  )
}

function NotFound(){
  return(
    <img src='data:image/png;base64,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' alt='not found page'></img>
  )
}

export default App;
