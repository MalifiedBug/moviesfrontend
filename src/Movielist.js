import Movie from "./Movie";
import { useEffect, useState } from "react";

export default function MovieList() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://632464475c1b435727a76571.mockapi.io/movies/`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => {
        setMovies(response);
      });
  }, []);

  return (
    <div className="movielist-container">
      {movies.map((mv, index) => (
        <div>
          <Movie index={index} movie={mv} />
        </div>
      ))}
    </div>
  );
}
