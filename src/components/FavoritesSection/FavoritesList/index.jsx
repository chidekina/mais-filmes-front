import styled from "styled-components";
import FavoriteCard from "../FavoriteCard";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
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