import styled from "styled-components";
import FavoriteCard from "../FavoriteCard";

const StyledList = styled.ul`
    list-style: none;
    padding: 0 1rem;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 640px) {
        padding: 0 1.5rem;
        max-width: 700px;
    }

    @media (min-width: 768px) {
        padding: 0 2rem;
        max-width: 800px;
    }

    @media (min-width: 1024px) {
        padding: 0;
        max-width: 900px;
    }
`;

const FavoritesList = ({ favorites, removeFromFavorites }) => {
    return (
        <StyledList>
            {favorites.map(movie => (
                <FavoriteCard
                    key={movie.id}
                    movie={movie}
                    removeFromFavorites={removeFromFavorites}
                />
            ))}
        </StyledList>
    );
};

export default FavoritesList;