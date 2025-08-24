import styled from "styled-components";

const MovieCard = styled.li`
    margin-bottom: 1.5rem;
    background: #222;
    border-radius: 8px;
    padding: 0.75rem;
    color: #fff;
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 12px;

    @media (min-width: 640px) {
        padding: 1rem;
        gap: 18px;
        align-items: center;
    }

    @media (min-width: 768px) {
        gap: 24px;
    }
`;

const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    min-width: 0;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 0.2rem;
    width: 100%;
`;

const Poster = styled.img`
    width: 70px;
    height: 105px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;

    @media (min-width: 640px) {
        width: 85px;
        height: 127px;
    }

    @media (min-width: 768px) {
        width: 100px;
        height: 150px;
    }
`;

const Title = styled.strong`
    font-size: 18px;
`;

const Date = styled.div`
    font-size: 14px;
    margin: 0.5rem 0;
`;

const Rating = styled.div`
    font-size: 14px;
    margin-bottom: 0.5rem;
`;

const RemoveButton = styled.button`
    background: #e63946;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 8px;
    align-self: flex-start;
`;

const FavoriteCard = ({ movie, removeFromFavorites }) => {
    return (
        <MovieCard>
            <Poster
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/100x150/cccccc/666666?text=Sem+Imagem'}
                alt={movie.title}
            />
            <Info>
                <Details>
                    <Title>{movie.title}</Title>
                    <Date>{movie.release_date}</Date>
                    <Rating>Nota: ⭐ {movie.vote_average}/10</Rating>
                </Details>
                <RemoveButton onClick={() => removeFromFavorites(movie.id)}>
                    Remover dos favoritos
                </RemoveButton>
            </Info>
        </MovieCard>
    );
};

export default FavoriteCard;