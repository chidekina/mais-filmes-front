import styled from "styled-components";

const NameDisplay = styled.span`
    font-weight: 600;
    margin-left: 5px;
`

const HighlightName = styled.span`
    color: var(--highlight-color);
    font-weight: 800;
`

const LogoutButton = styled.button`
    margin-left: 4px;
    background-color: var(--highlight-color);
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: 800;
`

const UserGreeting = ({ displayName, onClick }) => {
    return (
        <div>
            <NameDisplay>Olá, <HighlightName>{displayName}</HighlightName></NameDisplay>
            <LogoutButton
                onClick={onClick}
            >
                Logout
            </LogoutButton>
        </div>
    );
}

export default UserGreeting;