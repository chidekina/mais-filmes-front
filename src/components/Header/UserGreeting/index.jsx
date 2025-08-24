import styled from "styled-components";

const NameDisplay = styled.span`
    font-weight: 600;
    margin-left: 5px;
`

const HighlightName = styled.span`
    color: var(--highlight-color);
    font-weight: 800;
`

const UserGreetingContainer = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;

const LogoutButton = styled.button`
    margin-left: 50px;
    background-color: var(--black-graphite-color);
    color: var(--white);
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: 800;
`

const UserGreeting = ({ displayName, onClick }) => {
    return (
        <UserGreetingContainer>
            <NameDisplay>Olá, <HighlightName>{displayName}</HighlightName></NameDisplay>
            <LogoutButton
                onClick={onClick}
            >
                Logout
            </LogoutButton>
        </UserGreetingContainer>
    );
}

export default UserGreeting;