import React from "react";
import styled from "styled-components";
import menuLinks from "../../db/menu.json";
import { NavLink } from "react-router-dom";
import { useAuth } from '../../hooks/authContext';

const NavList = styled.div`
    display: none;
    @media (min-width: 48rem) {
        display: block;
    }
`;

const NavListContainer = styled.div`
    margin-left: 2.5rem; 
    display: flex;
    align-items: baseline;
    gap: 1rem; 
`;

const StyledNavLink = styled(NavLink)`
    color: white;
    padding: 0.5rem 0.75rem; 
    border-radius: 0.375rem; 
    font-size: 0.875rem; 
    font-weight: 500; 
    display: block;
    transition: color 0.2s;
    text-decoration: none;

    &:hover {
        color: var(--highlight-color); 
    }
`;

const NavListMobile = styled.div`
    display: flex;
    flex-direction: column;

    & a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem; 
        font-size: 1rem;
        font-weight: 500; 
        display: block;
        transition: color 0.2s;

        &:hover {
            color: var(--highlight-color);
        }
    }
`

const NavBar = ({ isMobile = false, onItemClick, userState, setUserState }) => {
    const { currentUser } = useAuth();
    const filteredLinks = React.useMemo(() => {
        if (currentUser) {
            // Hide login/cadastro only if logged in
            return menuLinks.filter(link => link.path !== '/login' && link.path !== '/register');
        }
        // Always show all four options if not logged in
        return menuLinks;
    }, [currentUser]);

    if (isMobile) {
        return (
            <NavListMobile>
                {filteredLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        onClick={onItemClick}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </NavListMobile>
        );
    }

    return (
        <NavList>
            <NavListContainer>
                {filteredLinks.map(link => (
                    <StyledNavLink
                        key={link.id}
                        to={link.path}
                    >
                        {link.name}
                    </StyledNavLink>
                ))}
            </NavListContainer>
        </NavList>
    );
}

export default NavBar;