import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Favorites from "../pages/Favorites";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<Home />} />
                    <Route path="filme/:id" element={<MovieDetails />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;