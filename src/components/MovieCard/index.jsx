import styled from "styled-components";

const Card = styled.div`
    background: var(--light-gray-color);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 15px;
    transition: transform 0.2s;

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

const MovieCard = ({ movie, getImageUrl }) => {
    return (
        <Card key={movie.id} className="movie-card">
            <img
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x450/cccccc/666666?text=Sem+Imagem';
                }}
            />
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