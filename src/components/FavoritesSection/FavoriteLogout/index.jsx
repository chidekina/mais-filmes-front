import styled from "styled-components";

const LogoutButton = styled.button`
    background: var(--highlight-color);
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: bold;
    color: white;
`

const FavoriteLogout = ({ onClick }) => {
    return (
        <LogoutButton onClick={onClick}>
            Logout
        </LogoutButton>
      );
}
 
export default FavoriteLogout;