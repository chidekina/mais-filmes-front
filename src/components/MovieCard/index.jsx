import { useFavorites } from '../../hooks/useFavorites';
import Toast from '../Toast';
import MovieDetails from "./MovieDetails";
import ButtonForFavorite from "./ButtonForFavorite";
import MovieOverview from "./MovieOverview";
import MovieCardImage from "./MovieCardImage";
import MovieCardContainer from './MovieCardContainer';
import { useState } from 'react';

const MovieCard = ({ movie, getImageUrl, onClick }) => {
    const { isFavorite, addToFavorites, removeFromFavorites, currentUser } = useFavorites();
    const favorite = isFavorite(movie.id);
    const [toastMsg, setToastMsg] = useState("");

    const handleHeartClick = (e) => {
        e.stopPropagation();
        if (!currentUser) {
            setToastMsg("Você precisa estar logado para favoritar um filme.");
            setTimeout(() => setToastMsg(""), 3000);
            return;
        }
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <MovieCardContainer onClick={onClick}>
            {toastMsg && <Toast message={toastMsg} />}
            <MovieCardImage
                getImageUrl={getImageUrl}
                movie={movie}
            />
            <ButtonForFavorite
                onClick={handleHeartClick}
                favorite={favorite}
            />
            <MovieDetails movie={movie} />
            <MovieOverview movie={movie} />
        </MovieCardContainer>
    );
}

export default MovieCard;