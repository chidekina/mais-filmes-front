import styled from "styled-components";

const User = styled.h2`
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 600;

    & span {
        font-weight: 800;
        color: var(--highlight-color);
    }
`

const FavoriteUser = ({ currentUser }) => {
    return (
        <User>
            Favoritos de <span>
                {currentUser?.displayName || currentUser?.username || 'Visitante'}
            </span>
        </User>
    );
}

export default FavoriteUser;