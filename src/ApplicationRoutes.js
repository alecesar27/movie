import { Route,Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";
import { Favorites } from "./views/Favorites";


export const ApplicationRoutes = () =>(
    <>

            <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/movie"  exact element={<MovieDetail />} />
                    <Route path="/favorites" exact element={<Favorites />} />
            </Routes>

       
    </>

);