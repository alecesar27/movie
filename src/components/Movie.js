import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store/actions/movies";

export const Movie = ( {movie} ) => {
    
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    return (
        <div className="movie-item">
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt=""></img>
            </div>

            <div className="movie-excerpt">
                <h3>{movie.title}</h3>
                {console.log(movie.id)}
                {/* 
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                        View Details
                </Link>
                 */}   {
                        // ternary condition to add or remove film
                        favorites.movies.find(m => m.id === movie.id)
                        ?(
                            <button  className ="btn btn-danger" onClick={() => dispatch(removeMovie(movie))}>Remove from Favorite</button>
                        ) 
                        : (
                            <button  className ="btn btn-secondary" onClick={() => dispatch(addMovie(movie))}>Add to Favorite</button>
                        )
                        
                    }
                    
                </div>
        
        </div>
     
    );
}