
import Movie from "./Movie"

export default function MovieList({movies}){
    return(
        <div className="movielist-container">
            {movies.map((mv)=>(<Movie movie={mv}/>))}
        </div>
    )
}