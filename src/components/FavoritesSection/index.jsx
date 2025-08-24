import styled from "styled-components";
import FavoriteLogout from "./FavoriteLogout";
import FavoritesContainer from "./FavoritesContainer";
import FavoritesList from "./FavoritesList";
import FavoriteUser from "./FavoriteUser";

const TopSection = styled.div`
    
        width: 100%;
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        `
const FavoritesSection = ({ currentUser, logoutUser, loading, favorites, removeFromFavorites }) => {
    return (
        <FavoritesContainer>
            <TopSection>
                <FavoriteUser currentUser={currentUser} />
                {currentUser && <FavoriteLogout onClick={logoutUser} />}
            </TopSection>
            {loading && <p>Carregando...</p>}
            {!loading && (!favorites || favorites.length === 0) ? (
                <p>Nenhum filme favorito encontrado.</p>
            ) : (!loading && <FavoritesList favorites={favorites} removeFromFavorites={removeFromFavorites} />)}
        </FavoritesContainer>
    );
}

export default FavoritesSection;