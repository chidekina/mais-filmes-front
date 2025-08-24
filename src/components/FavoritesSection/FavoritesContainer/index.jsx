import styled from "styled-components";

const FavoritesSectionContainer = styled.div`
    margin-top: 5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 3rem;
`

const FavoritesContainer = ({ children }) => {
    return ( 
        <FavoritesSectionContainer>
                {children}
        </FavoritesSectionContainer>
     );
}
 
export default FavoritesContainer;