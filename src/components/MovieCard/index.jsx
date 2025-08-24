import { useFavorites } from '../../hooks/useFavorites';
import useToast from '../../hooks/useToast';
import Toast from '../Toast';
import MovieDetails from "./MovieDetails";
import ButtonForFavorite from "./ButtonForFavorite";
import MovieOverview from "./MovieOverview";
import MovieCardImage from "./MovieCardImage";
import MovieCardContainer from './MovieCardContainer';

const MovieCard = ({ movie, getImageUrl, onClick }) => {
    const { isFavorite, addToFavorites, removeFromFavorites, currentUser } = useFavorites();
    const { toast, showError, hideToast, hasMessage } = useToast();
    const favorite = isFavorite(movie.id);

    const handleHeartClick = (e) => {
        e.stopPropagation();
        if (!currentUser) {
            showError("Você precisa estar logado para favoritar um filme.");
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
            {hasMessage && (
                <Toast 
                    type={toast.type}
                    onClose={hideToast}
                >
                    {toast.message}
                </Toast>
            )}
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