import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store/actions/movies";

export const Favorites = () =>{

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites)

    return(
        <section className ="main-header">
            <h1>My Favorities Films </h1>
                <ul>
                    {
                        favorites.movies.map(movie =>
                            <li>
                                {console.log(movie)}
                                {movie.title} <br></br><br></br>
                                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt=""></img> <br></br><br></br>
                                Overview: {movie.overview}<br></br>
                                Popularity: {movie.popularity} <br></br><br></br>
                                {
                                    // ternary condition to add or remove film
                                    favorites.movies.find(m => m.id === movie.id)
                                    ?(
                                        <button  className ="btn btn-danger" onClick={() => dispatch(removeMovie(movie))}>Remove from Favorite</button>
                                    ) 
                                    : (
                                        <button  className ="btn btn-secondary" onClick={() => dispatch(addMovie(movie))}>Add to Favorite</button>
                                    )
                        
                                }
                                
                            </li>)
                    }
                </ul>
        </section>    
    );
};