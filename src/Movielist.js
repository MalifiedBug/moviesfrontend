import Movie from "./Movie";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ListContext = createContext();

export default function MovieList() {

  const [movies, setMovies] = useState([]);
  const [favResponse,setFavResponse]= useState(null)
 

  useEffect(() => {
    fetch(`https://632464475c1b435727a76571.mockapi.io/movies/`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => {
        setMovies(response);
      });
  }, [favResponse]);

  return (
    <ListContext.Provider value={ [favResponse,setFavResponse] }>
      <div className="movielist-container">
        {movies.map((mv, index) => (
          <div>
            <Movie index={index} movie={mv} />
          </div>
        ))}
      </div>
    </ListContext.Provider>
  );
}
