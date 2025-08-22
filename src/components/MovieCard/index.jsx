import styled from "styled-components";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useFavorites } from '../../hooks/useFavorites';

const Card = styled.div`
    background: var(--light-gray-color);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 15px;
    transition: transform 0.2s, opacity 0.5s;
    opacity: 0;
    animation: fadeIn 0.6s forwards;

    position: relative;

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    & img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px;
    }
    
    & h3 {
        margin: 10px 0;
        font-size: 1.1em;
        color: #333;
    }
    
    & p {
        margin: 5px 0;
        font-size: 0.9em;
        color: #666;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
`
const Overview = styled.p`
        font-style: italic;
    margin-top: 10px;
`

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
        <Card className="movie-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x450/cccccc/666666?text=Sem+Imagem';
                }}
            />
            <button
                onClick={handleHeartClick}
                style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    zIndex: 2
                }}
                aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
                {favorite ? <FaHeart size={24} color="#e63946" /> : <FaRegHeart size={24} color="#e63946" />}
            </button>
            <h3>{movie.title}</h3>
            <p><strong>Nota:</strong> ⭐ {movie.vote_average.toFixed(1)}/10</p>
            <p><strong>Lançamento:</strong> {new Date(movie.release_date).toLocaleDateString('pt-BR')}</p>
            <Overview>{movie.overview.length > 100 ?
                movie.overview.substring(0, 100) + '...' :
                movie.overview
            }</Overview>
        </Card>
    );
}

export default MovieCard;