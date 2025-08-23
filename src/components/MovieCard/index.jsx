import { useFavorites } from '../../hooks/useFavorites';
import MovieDetails from "./MovieDetails";
import ButtonForFavorite from "./ButtonForFavorite";
import MovieOverview from "./MovieOverview";
import MovieCardImage from "./MovieCardImage";
import MovieCardContainer from './MovieCardContainer';

const MovieCard = ({ movie, getImageUrl, onClick }) => {
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
    const favorite = isFavorite(movie.id);

    const handleHeartClick = (e) => {
        e.stopPropagation();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <MovieCardContainer onClick={onClick}>
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